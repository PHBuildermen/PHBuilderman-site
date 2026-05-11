// script.js
async function loadPosts() {
    const snapshot = await db.collection("posts").orderBy("date", "desc").get();
    const container = document.getElementById("posts-container");
    container.innerHTML = "";

    snapshot.forEach(doc => {
        const post = doc.data();
        const card = `
            <div class="card">
                <img src="\( {post.thumbnail}" alt=" \){post.title}">
                <div class="card-content">
                    <span class="tag">${post.category}</span>
                    <h3>${post.title}</h3>
                    <p>${post.description.substring(0, 120)}...</p>
                    <small>${new Date(post.date).toLocaleDateString('en-PH')}</small><br><br>
                    <a href="${post.youtubeLink}" target="_blank" class="btn btn-primary">Watch on YouTube</a>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Search
function searchPosts() {
    const term = document.getElementById("searchInput").value.toLowerCase();
    // Simple client-side filter (you can enhance later)
}
