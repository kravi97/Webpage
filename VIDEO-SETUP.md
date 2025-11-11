# Video Profile System

This webpage displays different video profiles based on URL parameters.

## How to Access Different Videos

Access different people's videos by adding `?person=` parameter to the URL:

### Available Profiles:

1. **Omkar Choudhary**
   - URL: `https://wai-tech.netlify.app/?person=omkar-choudhary`
   - Video: `assets/omkar.webm`

2. **kaushikg Gokhale**
   - URL: `https://ankita-video-page.netlify.app?person=kaushikg-gokhale`
   - Video: `assets/kaushikg.webm`

3. **Shalvi Palande**
   - URL: `https://ankita-video-page.netlify.app?person=shalvi-palande`
   - Video: `assets/shalvi.webm`

4. **Ankita Kulkarni** (Default)
   - URL: `https://ankita-video-page.netlify.app?person=ankita-kulkarni`
   - Video: `assets/ankita.webm`

## Adding Videos

Place video files in the `assets/` folder:
- `omkar.webm` - Omkar Chaudhary's video
- `kaushikg.webm` - kaushikg Gokhale's video
- `shalvi.webm` - Shalvi Palande's video
- `ankita.webm` - Ankita Kulkarni's video

## Configuration

Edit `config.js` to:
- Update LinkedIn profile URLs
- Change video file names
- Add/remove people
- Modify page titles

## Current Setup

- Video files: `.webm` or `.webm` format supported
- Each person has their own LinkedIn profile link
- Default profile: Ankita Kulkarni (if no parameter specified)
