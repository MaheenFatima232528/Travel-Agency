document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
      if (username !== '' && password !== '') {
       
        alert('Login successful! Welcome to the travel agency.');
  
        window.location.href = 'homepage.html';
      } else {
        alert('Please enter valid username and password.');
      }
    });
  });
  