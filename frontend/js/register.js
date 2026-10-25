
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    // Validate name
    if (!name) {
        alert("Please enter your full name.");
        return;
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate phone
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Validate password
    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }

    // Confirm password
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const submitButton = registerForm.querySelector(
        'button[type="submit"]'
    );

    try {
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Creating account...";
        }

        // Send registration details to the Node.js backend
        const response = await fetch(
            "http://localhost:5000/api/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    password
                })
            }
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
            throw new Error(
                result.message || "Registration failed."
            );
        }

        alert("Account created successfully!");

        window.location.href = "login.html";

    } catch (error) {
        console.error("Registration error:", error);

        alert(
            error.message === "Failed to fetch"
                ? "Cannot connect to the server. Make sure your backend is running on port 5000."
                : error.message
        );

    } finally {
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = "Register";
        }
    }
});
