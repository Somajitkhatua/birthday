function goToPage(n) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page${n}`).classList.add('active');
  document.getElementById('heartContainer').style.display = (n === 4 || n === 5) ? 'none' : 'block';
  document.getElementById('balloonContainer').style.display = n === 4 ? 'block' : 'none';
  if (n === 5) startTyping();
}

// Floating hearts
const heartContainer = document.getElementById('heartContainer');
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (5 + Math.random() * 5) + 's';
  heartContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 300);

// Floating balloons
const balloonContainer = document.getElementById('balloonContainer');
function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.setProperty('--dir', Math.random().toFixed(2));
  balloon.style.animationDuration = (6 + Math.random() * 4) + 's';
  balloonContainer.appendChild(balloon);
  setTimeout(() => balloon.remove(), 10000);
}
setInterval(() => {
  if (balloonContainer.style.display === 'block') {
    createBalloon();
  }
}, 500);

// Show photos one by one
let currentImage = 0;
const images = document.querySelectorAll('#photoGrid img');
images.forEach(img => img.classList.remove('visible'));
function showNextImage() {
  if (currentImage < images.length) {
    images[currentImage].classList.add('visible');
    currentImage++;
  } else {
    goToPage(4);
  }
}

// Typing animation for final wish
const message = `🎂 Wishing you a magical birthday full of love, smiles, and blessings!

❤️ “Har khushi mile aapko duniya ke us kone se,  
Jahan kabhi gham na aaye kisi mod se.”

🌹 “Tum mile toh lagta hai zindagi sanwar gayi,  
Tere muskuraane se meri har subah bahar gayi.”

💖 You are the melody in my song, the spark in my stars, and the rhythm in my heart.

🌈 On this special day, I just want to say:  
Thank you for being you.  
I love you endlessly. Happy Birthday my queen!I love you My Cutie💖 💕` ;

function startTyping() {
  const typingText = document.getElementById('typingText');
  typingText.innerHTML = '';
  let i = 0;
  const speed = 25;
  function type() {
    if (i < message.length) {
      typingText.innerHTML += message.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
