function validateLogin(callback) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check whether username and password match
  if (username === "admin" && password === "12345") {
    // If login is successful, using callback redirect to main page
    callback(); 
  } else {
    alert("Invalid username or password. Please try again.");// if login is unsucessful or empty
  }

  
  return false;
}

// Callback function to redirect to the main page
function redirectToMainPage() {
  window.location.href = "mainPage.html"; // Redirect to main page
}


document.getElementById("loginForm").onsubmit = function() {
  return validateLogin(redirectToMainPage);
};



































  