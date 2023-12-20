function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
  
    // Replace this with your actual authentication logic
    if (username === 'example' && password === 'password') {
      errorMessage.style.color = 'green';
      errorMessage.textContent = 'Login successful!';
    } else {
      errorMessage.style.color = 'red';
      errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
  }