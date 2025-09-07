<!DOCTYPE html>
<html>
<head>
    <title>Simple Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .login-container {
            background: #fff;
            padding: 20px 30px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            width: 300px;
            text-align: center;
        }
        .login-container h2 {
            margin-bottom: 20px;
        }
        input[type="text"], 
        input[type="password"] {
            width: 90%;
            padding: 8px;
            margin: 8px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            background: #4CAF50;
            color: white;
            padding: 10px 18px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }
        button:hover {
            background: #45a049;
        }
        #message {
            margin-top: 15px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form id="loginForm">
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username" required><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password" required><br>
            <button type="submit">Login</button>
        </form>
        <p id="message"></p>
    </div>

    <script>
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const messageDisplay = document.getElementById('message');

            const username = usernameInput.value;
            const password = passwordInput.value;

            // Simple hardcoded credentials for demonstration
            const correctUsername = 'user';
            const correctPassword = 'password123';

            if (username === correctUsername && password === correctPassword) {
                messageDisplay.textContent = 'Login successful!';
                messageDisplay.style.color = 'green';
                // Example: redirect after success
                // window.location.href = 'dashboard.html';
            } else {
                messageDisplay.textContent = 'Invalid username or password.';
                messageDisplay.style.color = 'red';
            }

            // Clear password field for security
            passwordInput.value = '';
        });
    </script>
</body>
</html>
