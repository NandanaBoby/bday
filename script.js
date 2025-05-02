document.addEventListener('DOMContentLoaded', function() {
    const giftBox = document.getElementById('gift-box');
    const birthdayWish = document.getElementById('birthday-wish');
    const surprise = document.getElementById('surprise');
    const button = document.querySelector('button');

    // Gift box click handler
    giftBox.addEventListener('click', function() {
        // First stage animation
        this.style.transform = 'scale(0.8) rotate(10deg)';
        this.style.opacity = '0.7';
        
        // First confetti burst
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff0000', '#00ff00', '#0000ff']
        });

        // Second stage after delay
        setTimeout(() => {
            // Hide birthday wish
            birthdayWish.style.display = 'none';
            
            // Show surprise with animation
            surprise.style.display = 'block';
            setTimeout(() => {
                surprise.style.opacity = '1';
            }, 10);
            
            // Bigger confetti burst
            confetti({
                particleCount: 200,
                spread: 90,
                origin: { y: 0.4 },
                scalar: 1.2,
                colors: ['#ff6b81', '#ff4757', '#ff6348']
            });
            
            // Remove gift box
            this.style.display = 'none';
        }, 500);
    });

    // Button hover effect
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});