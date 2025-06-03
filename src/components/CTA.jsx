import React from 'react';
import "../styles/component.css";

const openAuthForm = () => {
  const html = `
    <html>
      <head>
        <title>Sign Up / Login</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f8fafc; color: #222; display: flex; justify-content: center; align-items: center; height: 100vh; }
          .auth-wrapper { background: #fff; padding: 32px 28px; border-radius: 14px; box-shadow: 0 4px 24px rgba(80,120,200,0.13); min-width: 340px; }
          .tabs { display: flex; margin-bottom: 18px; }
          .tab-btn {
            flex: 1;
            padding: 12px 0;
            background: #e0e7ff;
            border: none;
            border-radius: 8px 8px 0 0;
            font-size: 1.1rem;
            font-weight: 600;
            color: #2d3a4a;
            cursor: pointer;
            transition: background 0.2s, color 0.2s;
            outline: none;
          }
          .tab-btn.active {
            background: #0077cc;
            color: #fff;
          }
          .auth-form { display: none; }
          .auth-form.active { display: block; }
          label { display: block; margin: 12px 0 4px 0; font-weight: 500; }
          input { width: 100%; padding: 8px 10px; margin-bottom: 10px; border-radius: 6px; border: 1px solid #cbd5e1; font-size: 1rem; }
          button[type="submit"] { background: #0077cc; color: #fff; border: none; padding: 10px 24px; border-radius: 8px; cursor: pointer; font-size: 1rem; font-weight: 600; width: 100%; margin-top: 10px; }
          button[type="submit"]:hover { background: #005fa3; }
          small { color: #555; }
        </style>
      </head>
      <body>
        <div class="auth-wrapper">
          <div class="tabs">
            <button class="tab-btn active" id="signupTab" onclick="showTab('signup')">Sign Up</button>
            <button class="tab-btn" id="loginTab" onclick="showTab('login')">Login</button>
          </div>
          <form id="signupForm" class="auth-form active">
            <label for="name">Name</label>
            <input type="text" id="name" required maxlength="20" />
            <label for="email">Email</label>
            <input type="email" id="email" required />
            <label for="password">Password</label>
            <input type="password" id="password" required minlength="8" />
            <small>Password must include at least 1 uppercase letter, 1 number, and 1 special character.</small>
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" required minlength="8" />
            <small>Passwords must match.</small>
            <button type="submit">Sign Up</button>
          </form>
          <form id="loginForm" class="auth-form">
            <label for="loginEmail">Email</label>
            <input type="email" id="loginEmail" required />
            <label for="loginPassword">Password</label>
            <input type="password" id="loginPassword" required minlength="8" />
            <small>Password must include at least 1 uppercase letter, 1 number, and 1 special character.</small>
            <button type="submit">Login</button>
          </form>
        </div>
        <script>
          function showTab(tab) {
            document.getElementById('signupForm').classList.remove('active');
            document.getElementById('loginForm').classList.remove('active');
            document.getElementById('signupTab').classList.remove('active');
            document.getElementById('loginTab').classList.remove('active');
            if(tab === 'signup') {
              document.getElementById('signupForm').classList.add('active');
              document.getElementById('signupTab').classList.add('active');
            } else {
              document.getElementById('loginForm').classList.add('active');
              document.getElementById('loginTab').classList.add('active');
            }
          }
          document.getElementById('signupForm').onsubmit = function(e) {
            e.preventDefault();
            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirmPassword').value;
            var emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            var upperCasePattern = /[A-Z]/;
            var numberPattern = /[0-9]/;
            var specialCharPattern = /[^A-Za-z0-9]/;
            if (!name) {
              alert('Please enter your name.');
              return;
            }
            if (name.length > 20) {
              alert('Name must be 20 characters or less.');
              return;
            }
            if (!emailPattern.test(email)) {
              alert('Please enter a valid email address.');
              return;
            }
            if (password.length < 8) {
              alert('Password must be at least 8 characters.');
              return;
            }
            if (
              !upperCasePattern.test(password) ||
              !numberPattern.test(password) ||
              !specialCharPattern.test(password)
            ) {
              alert('Password must include at least 1 uppercase letter, 1 number, and 1 special character.');
              return;
            }
            if (password !== confirmPassword) {
              alert('Passwords do not match.');
              return;
            }
            alert('You are signed up!');
          }
          document.getElementById('loginForm').onsubmit = function(e) {
            e.preventDefault();
            var email = document.getElementById('loginEmail').value.trim();
            var password = document.getElementById('loginPassword').value;
            var emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            var upperCasePattern = /[A-Z]/;
            var numberPattern = /[0-9]/;
            var specialCharPattern = /[^A-Za-z0-9]/;
            if (!emailPattern.test(email)) {
              alert('Please enter a valid email address.');
              return;
            }
            if (password.length < 8) {
              alert('Password must be at least 8 characters.');
              return;
            }
            if (
              !upperCasePattern.test(password) ||
              !numberPattern.test(password) ||
              !specialCharPattern.test(password)
            ) {
              alert('Password must include at least 1 uppercase letter, 1 number, and 1 special character.');
              return;
            }
            alert('You are logged in!');
          }
        </script>
      </body>
    </html>
  `;
  const win = window.open('', '_blank');
  win.document.write(html);
  win.document.close();
};

const CTA = () => (
  <section className="cta">
    <h2>Ready for Hongkong journey?</h2>
    <button onClick={openAuthForm}>Book Your Trip</button>
  </section>
);

export default CTA;