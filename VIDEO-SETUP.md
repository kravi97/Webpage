# Video Profile System

This webpage displays different video profiles based on URL parameters.

## How to Access Different Videos

Access different people's videos by adding `?person=` parameter to the URL:

### Available Profiles:

1. **Omkar Chaudhary**
   - URL: `https://ankita-video-page.netlify.app?person=omkar-chaudhary`
   - Video: `assets/omkar.mp4`

2. **Kaushik Gokhale**
   - URL: `https://ankita-video-page.netlify.app?person=kaushik-gokhale`
   - Video: `assets/kaushik.mp4`

3. **Shalvi Palande**
   - URL: `https://ankita-video-page.netlify.app?person=shalvi-palande`
   - Video: `assets/shalvi.mp4`

4. **Ankita Kulkarni** (Default)
   - URL: `https://ankita-video-page.netlify.app?person=ankita-kulkarni`
   - Video: `assets/ankita.mp4`

## Adding Videos

Place video files in the `assets/` folder:
- `omkar.mp4` - Omkar Chaudhary's video
- `kaushik.mp4` - Kaushik Gokhale's video
- `shalvi.mp4` - Shalvi Palande's video
- `ankita.mp4` - Ankita Kulkarni's video

## Configuration

Edit `config.js` to:
- Update LinkedIn profile URLs
- Change video file names
- Add/remove people
- Modify page titles

## Current Setup

- Video files: `.mp4` or `.webm` format supported
- Each person has their own LinkedIn profile link
- Default profile: Ankita Kulkarni (if no parameter specified)
