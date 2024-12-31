<ChristFlex html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Christians Hangout</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <img src="https://via.placeholder.com/100" alt="Logo" class="logo">
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="groups.html">Groups</a></li>
                <li><a href="events.html">Events</a></li>
                <li><a href="profile.html">Profile</a></li>
            </ul>
        </nav>
        <div class="auth">
            <a href="login.html">Login</a> | <a href="signup.html">Sign Up</a>
        </div>
    </header>

    <main>
        <div id="news-feed">
            <h1>Welcome to Christians Hangout</h1>
            <div class="post-section">
                <textarea placeholder="What's on your mind?"></textarea>
                <button>Post</button>
            </div>
            <div id="feed">
                <!-- Post feed will appear here -->
            </div>
        </div>
    </main>

    <footer>
        <p>&copy; 2024 Christians Hangout. All Rights Reserved.</p>
    </footer>

    <script src="app.js"></script>
</body>
</html>

body {
    font-family: Arial, sans-serif;
    background-color: #f0f4f8;
    color: #333;
    margin: 0;
}

header {
    background-color: #2a5298;
    padding: 20px;
    text-align: center;
}

header .logo {
    max-width: 100px;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline-block;
    margin: 0 15px;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.auth a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
}

#news-feed {
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
}

.post-section {
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
}

button {
    background-color: #1abc9c;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #16a085;
}

footer {
    text-align: center;
    padding: 20px;
    background-color: #2a5298;
    color: white;
    position: absolute;
    width: 100%;
    bottom: 0;
}


// Sample script for handling post submissions
document.querySelector('button').addEventListener('click', () => {
    const postContent = document.querySelector('textarea').value;
    if (postContent) {
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.innerHTML = `
            <p>${postContent}</p>
            <small>Posted just now</small>
        `;
        document.getElementById('feed').appendChild(newPost);
        document.querySelector('textarea').value = ''; // Clear textarea
    }
});
