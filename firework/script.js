document.addEventListener('DOMContentLoaded', function () {
    const fireworkAnimation = document.getElementById('fireworkAnimation');
    const mainContent = document.getElementById('mainContent');

    // Create firework effect
    for (let i = 0; i < 10; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.top = `${Math.random() * 100}vh`;
        firework.style.animationDelay = `${Math.random() * 2}s`;
        fireworkAnimation.appendChild(firework);
    }

    // Ensure the mainContent is hidden initially
    mainContent.classList.add('hidden');

    // Transition to main content after animation ends
    setTimeout(() => {
        fireworkAnimation.classList.add('hidden');
        mainContent.classList.remove('hidden');
    }, 5000); // Adjust this duration if necessary
});
