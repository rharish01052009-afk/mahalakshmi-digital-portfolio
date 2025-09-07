<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .login-container {
            background: white;
            padding: 20px 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            width: 300px;
        }
        h2 {
            text-align: center;
        }
        label {
            display: block;
            margin-top: 10px;
        }
        input {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
        }
        button {
            width: 100%;
            padding: 10px;
            margin-top: 15px;
            background: dodgerblue;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background: royalblue;
        }
        #message {
            text-align: center;
            margin-top: 15px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form id="loginForm">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">Login</button>
        </form>
        <p id="message"></p>
    </div>

    <script>
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from submitting and refreshing

            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const messageDisplay = document.getElementById('message');

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            // Hardcoded credentials for testing
            const correctUsername = 'user';
            const correctPassword = 'password123';

            if (username === correctUsername && password === correctPassword) {
                messageDisplay.textContent = 'Login successful!';
                messageDisplay.style.color = 'limegreen';
                // Example redirect
                // window.location.href = 'dashboard.html';
            } else {
                messageDisplay.textContent = 'Invalid username or password.';
                messageDisplay.style.color = 'red';
            }

            // Clear password field
            passwordInput.value = '';
        });
    </script>
</body>
</html>
