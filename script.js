const video = document.getElementById('heroVideo');

// Safety: if no video source provided, show a message in console.
if (!video) console.warn('Video element not found');

// Start autoplay with sound; note: browsers may block autoplay with sound
video.autoplay = true;
video.muted = false;
video.loop = true;
video.playsInline = true;

// Preload and try to play with sound
video.addEventListener('loadedmetadata', () => {
  video.play().catch((err) => console.warn('Autoplay failed:', err));
});

// If user taps the video itself, toggle play/pause
video.addEventListener('click', () => {
  video.paused ? video.play() : video.pause();
});

// Accessibility: keyboard play/pause
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    video.paused ? video.play() : video.pause();
  }
});
