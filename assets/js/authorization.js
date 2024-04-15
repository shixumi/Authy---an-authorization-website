document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("authorized-btn").addEventListener("click", function() {
        // Prompt for username and password
        var username = prompt("Enter your username:");
        var password = prompt("Enter your password:");

        // Check if username and password are correct
        if (username === "admin" && password === "root") {
            // If correct, redirect to authorized.html
            window.location.href = "auth.html";
        } else {
            // If incorrect, display an alert
            alert("Invalid username or password. You are unauthorized to access this site.");
        }
    });

    document.getElementById("unauthorized-btn").addEventListener("click", function() {
        // Display unauthorized message
        alert("You are unauthorized to access this site.");
    });
});
