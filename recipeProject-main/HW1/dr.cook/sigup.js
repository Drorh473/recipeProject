document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Check if passwords match
    if (password !== confirmPassword) {
        errorMessage.classList.remove("hidden");
        errorMessage.textContent = "Passwords do not match";
        return;
    }

    // Check if username already exists
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        errorMessage.classList.remove("hidden");
        errorMessage.textContent = "Username already exists";
        return;
    }

    // Add new user
    users.push({ username, password });
    alert("Sign up successful!");
    window.location.href = "/login.html"; // Redirect to login page
});