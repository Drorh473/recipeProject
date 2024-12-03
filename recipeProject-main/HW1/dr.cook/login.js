window.users = [
    { username: "lidor", password: "1234" },
    { username: "aviv", password: "1234" }
  ];
  
  document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const user = window.users.find(u => u.username === username && u.password === password);
  
    if (user) {
      localStorage.setItem('loggedInUser', user.username);
      window.location.href = "/index.html";
    } else {
      const errorMessage = document.getElementById("errorMessage");
      errorMessage.classList.remove("hidden");
      errorMessage.textContent = "Invalid username or password";
    }
  });