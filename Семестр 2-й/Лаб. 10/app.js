$(document).ready(function() {
    getNews().then();
    getComments().then();
});

async function getNews() {
    const apiKey = '844d5795b1734116bcae513b4dfbe504';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

async function getComments() {
    try {
        const response = await fetch('http://localhost:8000/get_comments');
        const data = await response.json();

        // Display comments on the page
        displayComments(data);
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

async function submitComment() {
    const commentText = $('#comment').val();

    try {
        const response = await fetch('http://localhost:8000/add_comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `comment=${encodeURIComponent(commentText)}`,
        });

        if (response.ok) {
            getComments().then();
        } else {
            console.error('Failed to add comment:', response.statusText);
        }
    } catch (error) {
        console.error('Error submitting comment:', error);
    }
}

function displayNews(articles) {
    const newsContainer = $('#news-container');

    articles.forEach(article => {
        const newsItem = `<a href="${article.url}" target="_blank" class="news-item">
                            <h3>${article.title}</h3>
                            <p>${article.description}</p>
                         </a>`;
        newsContainer.append(newsItem);
    });
}

function displayComments(comments) {
    const commentsContainer = $('#comments-container');
    commentsContainer.empty();

    comments.forEach(comment => {
        const commentItem = `<div>
                                <p>${comment}</p>
                             </div>`;
        commentsContainer.append(commentItem);
    });
}
