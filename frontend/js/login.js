const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Basic validation
    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }

    /*
        Temporary login simulation.

        Later this will become:

        fetch("http://localhost:5000/api/login", {
            method: "POST",
            ...
        })
    */

    alert("Login successful!");

    window.location.href = "dashboard.html";

});