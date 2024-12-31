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
