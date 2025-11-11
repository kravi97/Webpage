const video = document.getElementById('heroVideo');

// Safety: if no video source provided, show a message in console.
if (!video) console.warn('Video element not found');

// Start autoplay muted (browsers allow this)
video.autoplay = true;
video.muted = true;
video.loop = true;
video.playsInline = true;

// Preload and try to play muted
video.addEventListener('loadedmetadata', () => {
  video.play().catch((err) => console.warn('Autoplay failed:', err));
});

// On user click, unmute the video
video.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    console.log('Video unmuted');
  } else {
    video.paused ? video.play() : video.pause();
  }
});

// Accessibility: keyboard play/pause
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    video.paused ? video.play() : video.pause();
  }
});
