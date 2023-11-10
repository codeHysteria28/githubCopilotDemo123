const articles = document.getElementById('articles');

// create a function to get the posts from the API
const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return posts;
};

// create a function to render the posts to the DOM
const renderPosts = async () => {
    const posts = await getPosts();
    const postsHTML = posts.map(post => `
        <div class="post">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
    `).join('');
    articles.innerHTML = postsHTML;
};

// call the renderPosts function
renderPosts();