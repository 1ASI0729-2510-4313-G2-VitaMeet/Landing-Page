function validateLogin(event) {
    event.preventDefault();
  
    var storedUser = localStorage.getItem("user");
    var inputEmail = document.getElementById("loginEmail").value;
    var inputPassword = document.getElementById("loginPassword").value;
  
    if (!storedUser) {
      alert("No registered user found. Please register first.");
      window.location.href = "register.html";
      return;
    }
  
    storedUser = JSON.parse(storedUser);
  
    if (storedUser.email !== inputEmail || storedUser.password !== inputPassword) {
      alert("Incorrect email or password.");
      return;
    }
  
    alert("Login successful!");
    window.location.href = "index.html";
  }
  