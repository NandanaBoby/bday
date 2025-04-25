// Elements
const giftBox = document.getElementById('gift-box');
const birthdayWish = document.getElementById('birthday-wish');
const surprise = document.getElementById('surprise');
const submitBtn = document.getElementById('submit-btn');
const userMessage = document.getElementById('user-message');
const feedbackSection = document.getElementById('feedback-section');

// Open the gift
giftBox.addEventListener('click', () => {
    birthdayWish.classList.add('hidden');
    surprise.classList.remove('hidden');
    
    // Trigger confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});

// Submit feedback via Google Form

