const video = document.getElementById('heroVideo');

// Safety: if no video source provided, show a message in console.
if (!video) console.warn('Video element not found');

// Start muted and autoplay (browsers allow muted autoplay)
video.muted = true;
video.autoplay = true;
video.loop = true;
video.playsInline = true;

// When video starts playing, try to unmute immediately
video.addEventListener('play', () => {
  // Attempt to unmute on first play
  if (video.muted) {
    video.muted = false;
    console.log('Attempting to unmute video');
  }
});

// Preload and ensure video plays
video.addEventListener('loadedmetadata', () => {
  video.play().catch((err) => console.warn('Autoplay failed:', err));
});

// On user click, ensure video is unmuted and playing
video.addEventListener('click', () => {
  video.muted = false;
  if (video.paused) {
    video.play().then(() => {
      console.log('Playing with sound');
    }).catch((err) => {
      console.warn('Play failed:', err);
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
