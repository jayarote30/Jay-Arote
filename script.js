// Simple welcome alert
window.onload = function() {
    console.log("Welcome to Jay Arote Portfolio!");
};

// Example: smooth scroll (optional future feature)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});
