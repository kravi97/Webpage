const video = document.getElementById('heroVideo');
const playOverlay = document.getElementById('playOverlay');

// Safety: if no video source provided, show a message in console.
if (!video) console.warn('Video element not found');

async function playWithSound() {
  try {
    // Unmute and play
    video.muted = false;
    await video.play();

    // Hide overlay
    playOverlay.style.display = 'none';

    // Try to enter fullscreen on user gesture (mobile browsers differ)
    const el = video;
    if (el.requestFullscreen) {
      await el.requestFullscreen().catch(() => {});
    } else if (el.webkitEnterFullscreen) {
      // iOS Safari (video element only)
      try { el.webkitEnterFullscreen(); } catch(e){}
    } else if (el.webkitRequestFullscreen) {
      try { await el.webkitRequestFullscreen(); } catch(e){}
    }
  } catch (err) {
    console.warn('Play failed:', err);
  }
}

// Start muted autoplay where allowed; many mobile browsers block autoplay with sound
video.muted = true;
video.loop = true;
video.playsInline = true;

// Preload and try to play muted (this often works as a hint)
video.addEventListener('loadedmetadata', () => {
  video.play().catch(() => {});
});

// Overlay click triggers play with sound (user gesture)
playOverlay.addEventListener('click', (e) => {
  e.preventDefault();
  playWithSound();
});

// If user taps the video itself, also trigger
video.addEventListener('click', () => {
  if (video.paused) {
    // If it's paused, play with sound
    playWithSound();
  } else {
    // Toggle playback
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
