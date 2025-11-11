// Get URL parameter to determine which person's video to load
function getPersonFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('person') || defaultPerson;
}

// Load the appropriate video and configure page
function loadPersonVideo() {
  const personKey = getPersonFromURL();
  const config = videoConfig[personKey] || videoConfig[defaultPerson];
  
  // Set video source
  const videoSource = document.getElementById('videoSource');
  const video = document.getElementById('heroVideo');
  videoSource.src = config.video;
  
  // Detect video type from extension
  const videoExt = config.video.split('.').pop().toLowerCase();
  if (videoExt === 'webm') {
    videoSource.type = 'video/webm';
  } else if (videoExt === 'mp4') {
    videoSource.type = 'video/mp4';
  }
  
  // Reload video with new source
  video.load();
  
  // Update page title
  document.getElementById('pageTitle').textContent = config.title;
  
  // Update LinkedIn link
  document.getElementById('linkedinBtn').href = config.linkedin;
  
  console.log(`Loaded video for: ${config.name}`);
}

// Initialize on page load
loadPersonVideo();

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
