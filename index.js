function createBubbles() {
    const container = document.getElementById('bubblesContainer');
    if (!container) {
        console.log('No se encontró el contenedor de burbujas');
        return;
    }
    
    const emojis = ['📚', '📖', '✨', '⭐', '💫', '🌟', '📕', '📗', '📘', '📙'];
    
    
    setInterval(() => {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.animationDuration = (Math.random() * 3 + 4) + 's';
        bubble.style.fontSize = (Math.random() * 20 + 20) + 'px';
        
        container.appendChild(bubble);
        
    
        setTimeout(() => {
            bubble.remove();
        }, 7000);
    }, 800);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado');
    

    createBubbles();
    

    const letters = document.querySelectorAll('.dancing-title .letter');
    letters.forEach((letter, index) => {
        letter.style.animationDelay = (index * 0.1) + 's';
    });
    

    const floatingEmojis = document.querySelectorAll('.emoji-float');
    floatingEmojis.forEach(emoji => {
        emoji.style.display = 'inline-block';
    });
    
    console.log('Burbujas inicializadas');
});