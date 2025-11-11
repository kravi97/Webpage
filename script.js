const video = document.getElementById('heroVideo');
const playOverlay = document.getElementById('playOverlay');

// Safety: if no video source provided, show a message in console.
if (!video) console.warn('Video element not found');

// Start muted and don't autoplay - wait for user click
video.muted = true;
video.loop = true;
video.playsInline = true;

// When overlay button is clicked, play with sound
playOverlay.addEventListener('click', () => {
  video.muted = false;
  video.play().then(() => {
    playOverlay.style.display = 'none';
    console.log('Playing with sound');
  }).catch((err) => {
    console.warn('Play failed:', err);
  });
});

// Also allow clicking the video itself to start
video.addEventListener('click', () => {
  if (video.paused) {
    video.muted = false;
    video.play().then(() => {
      playOverlay.style.display = 'none';
    });
  }
});

// Accessibility: keyboard play/pause
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    video.paused ? video.play() : video.pause();
  }
});
