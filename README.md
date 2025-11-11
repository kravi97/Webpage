# Mobile Fullscreen Video Player

Files added:

- `index.html` — Simple player page that expects a video at `assets/video.webm`.
- `styles.css` — Mobile-first styles for fullscreen display and bottom buttons.
- `script.js` — Handles muted autoplay attempt, user-tap to play with sound, and requests fullscreen.

How to use

1. Place your video file at `assets/video.webm` (webm H.264 + AAC recommended).
2. Open `index.html` in your mobile browser (or desktop) to test.

Mobile-specific notes

- Autoplay with sound is blocked on most mobile browsers. The page attempts a muted autoplay loop as a hint, and shows a "Tap to play with sound" overlay. When the user taps, the video is unmuted and playback begins — this is the required user gesture to enable audio.
- The script attempts to call the various fullscreen APIs. iOS Safari only allows fullscreen via the native video controls or `webkitEnterFullscreen` on the video element.
- For best results test on a real device. Desktop browsers will also work.

Buttons

- Left button links to the LinkedIn profile: https://www.linkedin.com/in/sranabhor/
- Right button links to: https://www.waiin.com

Next steps / improvements

- Add custom video controls (seek, mute toggle) — low risk.
- Add progressive enhancement to fallback when fullscreen API is unavailable.
- Serve video with proper caching and compressed bitrate for mobile.

Deploying to Netlify
--------------------

You can deploy this site to Netlify in three common ways:

1) Drag & drop (quickest)
	- Zip the contents of the `c:\Webpage` folder (or drag the folder) into Netlify's "Sites > Add new site > Deploy manually" area.

2) Netlify CLI (recommended for frequent updates)
	- Install the CLI (requires Node.js):

```powershell
npm install -g netlify-cli
```

	- From `c:\Webpage` run:

```powershell
cd c:\Webpage
netlify deploy --prod --dir="."
```

	- The CLI will ask to link or create a site and then upload the folder contents. Use `--dir="."` because the site is a static folder root.

3) Git-based deploy (GitHub/GitLab/Bitbucket)
	- Push this project to a repository and connect the repo in the Netlify dashboard to enable continuous deploys.

Netlify config files included
---------------------------
- `netlify.toml` — simple publish config (publishes the repository root).
- `_redirects` — serves `index.html` for unmatched routes (helpful if you later add client-side routing).

PowerShell checklist to prepare files
-----------------------------------
From PowerShell you can quickly verify files exist before deploying:

```powershell
cd c:\Webpage
ls -Name
Test-Path .\assets\video.webm
```

Notes
-----
- Keep the video file size mobile-friendly. Consider providing an adaptive bitrate HLS stream if you expect many mobile users on slower networks.
- Netlify will serve static files over HTTPS by default.

