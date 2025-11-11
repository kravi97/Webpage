const video = document.getElementById('heroVideo');

// Safety: if no video source provided, show a message in console.
if (!video) console.warn('Video element not found');

// Start with sound enabled, loop, etc.
video.muted = false;
video.loop = true;
video.playsInline = true;

// Preload the video
video.addEventListener('loadedmetadata', () => {
  // Video is ready, but don't play yet
});

// On user click, play the video with sound
video.addEventListener('click', () => {
  if (video.paused) {
    video.play().then(() => {
      console.log('Playing with sound');
    }).catch((err) => {
      console.warn('Play failed:', err);
    });
  } else {
    video.pause();
  }
});

// Accessibility: keyboard play/pause
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    video.paused ? video.play() : video.pause();
  }
});
