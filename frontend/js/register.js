const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    // Check name

    if (name === "") {

        alert("Please enter your full name.");

        return;
    }


    // Check email

    if (!email.includes("@")) {

        alert("Please enter a valid email address.");

        return;
    }


    // Check phone

    if (!/^[0-9]{10}$/.test(phone)) {

        alert("Please enter a valid 10-digit phone number.");

        return;
    }


    // Check password

    if (password.length < 6) {

        alert(
            "Password must contain at least 6 characters."
        );

        return;
    }


    // Check password confirmation

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;
    }


    /*
        Temporary registration simulation.

        Later we will send this information
        to the Node.js backend.
    */

    const user = {

        name: name,

        email: email,

        phone: phone

    };


    console.log("New user:", user);


    alert(
        "Account created successfully!"
    );


    window.location.href = "login.html";

});