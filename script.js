// script.js
async function loadPosts() {
    const snapshot = await db.collection("posts").orderBy("date", "desc").get();
    const container = document.getElementById("posts-container");
    container.innerHTML = "";

    snapshot.forEach(doc => {
        const p = doc.data();
        const postId = doc.id;

        const card = `
            <div class="card">
                \( {p.thumbnail ? `<img src=" \){p.thumbnail}" alt="${p.title}">` : ''}
                <div class="card-content">
                    <span class="tag">${p.category}</span>
                    <h3>${p.title}</h3>
                    <p>${p.description.substring(0, 130)}...</p>
                    <small>${new Date(p.date).toLocaleDateString('en-PH')}</small>
                    
                    <div style="margin: 15px 0; display:flex; gap:15px; font-size:1.1rem;">
                        <span onclick="incrementViews('${postId}')" style="cursor:pointer;">👁 ${p.views || 0}</span>
                        <span onclick="likePost('${postId}')" style="cursor:pointer;">❤️ ${p.likes || 0}</span>
                    </div>
                    
                    <a href="${p.youtubeLink}" target="_blank" class="btn btn-primary">Watch on YouTube</a>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

async function incrementViews(postId) {
    await db.collection("posts").doc(postId).update({
        views: firebase.firestore.FieldValue.increment(1)
    });
    loadPosts();
}

async function likePost(postId) {
    await db.collection("posts").doc(postId).update({
        likes: firebase.firestore.FieldValue.increment(1)
    });
    loadPosts();
}
