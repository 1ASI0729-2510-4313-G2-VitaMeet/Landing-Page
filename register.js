function saveUser(event) {
    event.preventDefault();
  
    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
  
    const user = {
      username: username,
      email: email,
      password: password
    };
  
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful!");
    window.location.href = "login.html";
  }
  