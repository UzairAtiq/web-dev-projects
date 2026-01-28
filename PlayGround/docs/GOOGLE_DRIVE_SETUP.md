# Google Drive Integration Guide

This guide will help you set up Google Drive integration to dynamically load images, videos, and music into your Playground Fun application.

## Overview

The application can fetch files from your Google Drive folders and display them automatically. When you add new files to your Drive folders, they'll appear in the app after a refresh.

## Setup Instructions

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Click "Select a project" → "New Project"
3. Enter a project name (e.g., "Playground Fun")
4. Click "Create"

### Step 2: Enable Google Drive API

1. In your project, go to "APIs & Services" → "Library"
2. Search for "Google Drive API"
3. Click on it and press "Enable"

### Step 3: Create API Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "API Key"
3. Copy the API key (you'll need this later)
4. Click "Restrict Key" for security:
   - Under "API restrictions", select "Restrict key"
   - Choose "Google Drive API" from the dropdown
   - Click "Save"

### Step 4: Prepare Your Google Drive Folders

#### For Images:
1. Create a folder in Google Drive called "Playground-Images"
2. Add your images (JPG, PNG, GIF, WEBP)
3. Right-click the folder → "Share" → "Get link"
4. Set to "Anyone with the link can view"
5. Copy the folder ID from the URL:
   ```
   https://drive.google.com/drive/folders/FOLDER_ID_HERE
   ```

#### For Videos:
1. Create a folder called "Playground-Videos"
2. Add your videos (MP4, WEBM, MOV recommended)
3. Share it publicly (same as images)
4. Copy the folder ID

#### For Music:
1. Create a folder called "Playground-Music"
2. Add your audio files (MP3, WAV, OGG)
3. Share it publicly (same as images)
4. Copy the folder ID

### Step 5: Configure the Application

Open `src/utils/googleDrive.js` and update the configuration:

```javascript
export const DRIVE_CONFIG = {
  // Replace these with your folder IDs
  IMAGES_FOLDER_ID: 'your-images-folder-id',
  VIDEOS_FOLDER_ID: 'your-videos-folder-id',
  MUSIC_FOLDER_ID: 'your-music-folder-id',
  
  // Replace with your API key
  API_KEY: 'your-google-api-key',
};
```

## Using Direct Links (Alternative Method)

If you don't want to use the API, you can use direct Google Drive links:

### For a Single File:
1. Upload file to Google Drive
2. Right-click → "Get link" → "Anyone with the link can view"
3. Copy the file ID from the URL:
   ```
   https://drive.google.com/file/d/FILE_ID_HERE/view
   ```
4. Use this format in your components:
   ```javascript
   const imageUrl = `https://drive.google.com/uc?export=view&id=FILE_ID`;
   ```

### Example Usage in Components:

```javascript
// In PictureGallery.jsx
const myImages = [
  {
    id: 1,
    url: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID',
    title: 'My Photo',
  }
];
```

## File Format Recommendations

### Images:
- **Format**: JPG or PNG
- **Size**: Max 10MB per image
- **Dimensions**: 1920x1080 or smaller for web

### Videos:
- **Format**: MP4 (H.264 codec)
- **Size**: Max 100MB per video
- **Resolution**: 1080p or 720p recommended

### Music:
- **Format**: MP3 (320kbps or 192kbps)
- **Size**: Max 20MB per file
- **Length**: Any duration works

## Troubleshooting

### Files Not Loading?
1. Check that folders are shared publicly
2. Verify API key is correct and unrestricted
3. Check browser console for errors
4. Make sure files are in supported formats

### Slow Loading?
1. Reduce file sizes
2. Use optimized formats (WebP for images, MP4 for videos)
3. Limit number of files loaded at once

### API Quota Exceeded?
- Free tier: 1,000 requests per day
- If exceeded, wait 24 hours or upgrade to paid plan

## Security Notes

⚠️ **Important**: 
- Never commit your API key to public repositories
- Use environment variables for production
- Consider using OAuth 2.0 for better security
- Restrict API key to specific domains in production

## Environment Variables (Recommended for Production)

Create a `.env` file:
```env
VITE_GOOGLE_DRIVE_API_KEY=your_api_key_here
VITE_IMAGES_FOLDER_ID=your_images_folder_id
VITE_VIDEOS_FOLDER_ID=your_videos_folder_id
VITE_MUSIC_FOLDER_ID=your_music_folder_id
```

Then use in your code:
```javascript
const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
```

## Additional Resources

- [Google Drive API Documentation](https://developers.google.com/drive/api/v3/about-sdk)
- [API Key Best Practices](https://cloud.google.com/docs/authentication/api-keys)
- [Drive API Quotas](https://developers.google.com/drive/api/v3/limits)

## Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Verify all folder IDs and API key are correct
3. Ensure files are publicly accessible
4. Test with a small number of files first

---

**Note**: The app currently uses placeholder data. Follow these steps to connect your actual Google Drive folders!
