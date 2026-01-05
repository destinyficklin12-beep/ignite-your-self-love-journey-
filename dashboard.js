// Dashboard JavaScript for Self-Love Course
const modules = [
    { id: 1, title: "Understanding Self-Love", description: "What self-love really means and why it matters" },
    { id: 2, title: "Self-Awareness & Acceptance", description: "Getting to know and accept yourself deeply" },
    { id: 3, title: "Inner Child Healing", description: "Connecting with and healing your inner child" },
    { id: 4, title: "Positive Self-Talk", description: "Reframing negative thoughts and beliefs" },
    { id: 5, title: "Setting Boundaries", description: "Learning to say no and protect your energy" },
    { id: 6, title: "Self-Care Rituals", description: "Creating sustainable self-care practices" },
    { id: 7, title: "Self-Compassion", description: "Being kind to yourself in all circumstances" },
    { id: 8, title: "Authentic Living", description: "Embracing and expressing your true self" }
];

// Check authentication
auth.onAuthStateChanged(async (user) => {
    if (!user) {
        window.location.href = 'index.html';
        return;
    }
    
    // Display user email
    document.getElementById('userEmail').textContent = user.email;
    
    // Load user progress
    await loadUserProgress(user.uid);
});

// Load user progress from Firestore
async function loadUserProgress(userId) {
    try {
        const docRef = db.collection('selfLoveProgress').doc(userId);
        const doc = await docRef.get();
        
        let completedModules = [];
        if (doc.exists && doc.data().completedModules) {
            completedModules = doc.data().completedModules;
        }
        
        // Update progress bar
        const progress = (completedModules.length / modules.length) * 100;
        document.getElementById('progressBar').style.width = progress + '%';
        document.getElementById('progressBar').textContent = Math.round(progress) + '%';
        document.getElementById('progressText').textContent = 
            `You've completed ${completedModules.length} of ${modules.length} modules`;
        
        // Render modules
        renderModules(completedModules);
    } catch (error) {
        console.error('Error loading progress:', error);
        renderModules([]);
    }
}

// Render module cards
function renderModules(completedModules) {
    const grid = document.getElementById('modulesGrid');
    grid.innerHTML = '';
    
    modules.forEach(module => {
        const isCompleted = completedModules.includes(module.id);
        const card = document.createElement('div');
        card.className = `module-card ${isCompleted ? 'completed' : ''}`;
        
        // Make card clickable to go to course with module parameter
        card.style.cursor = 'pointer';
        card.onclick = () => {
            window.location.href = `course.html?module=${module.id}`;
        };
        
        card.innerHTML = `
            <div class="module-number">Module ${module.id}</div>
            <h3>${module.title}</h3>
            <p>${module.description}</p>
            ${isCompleted ? '<div class="completed-badge">✓ Completed</div>' : ''}
        `;
        grid.appendChild(card);
    });
}

// Sign out functionality
document.getElementById('signOutBtn').addEventListener('click', async () => {
    try {
        await auth.signOut();
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Error signing out:', error);
        alert('Error signing out. Please try again.');
    }
});
