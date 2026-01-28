/**
 * Google Drive Integration Utilities
 * Helper functions to fetch and parse files from Google Drive
 */

/**
 * Configuration helper for Google Drive integration
 */
export const DRIVE_CONFIG = {
  // Images folder ID
  IMAGES_FOLDER_ID: '1A6q9Pc_t034zZDcZ8bGa25X_2pAiSCih',
  
  // Videos folder ID
  VIDEOS_FOLDER_ID: '159ARNxOCPVlOCjbJAypn6FCOKw71d7as',
  
  // Music folder ID
  MUSIC_FOLDER_ID: '1L5pDhTKKKIO3mFc5znqoC2Lrra6qX8Wx',
  
  // Google API Key
  API_KEY: 'AIzaSyCvENif7JDG7lhjiR7rnt5Yhef-fopo3I0',
};

/**
 * Extract Google Drive File ID from various URL formats
 * @param {string} url - Google Drive URL
 * @returns {string|null} File ID or null
 */
export const extractDriveFileId = (url) => {
  if (!url) return null;

  // Handle different Google Drive URL formats
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /id=([a-zA-Z0-9_-]+)/,
    /\/folders\/([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};

/**
 * Convert Google Drive file URL to direct download/view URL
 * @param {string} fileId - Google Drive file ID
 * @param {string} type - Type of URL ('view' or 'download')
 * @returns {string} Direct URL
 */
export const getDriveDirectUrl = (fileId, type = 'view') => {
  if (type === 'download') {
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
};

/**
 * Get thumbnail URL for Google Drive file
 * @param {string} fileId - Google Drive file ID
 * @param {number} size - Thumbnail size (default 400)
 * @returns {string} Thumbnail URL
 */
export const getDriveThumbnailUrl = (fileId, size = 400) => {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${size}`;
};

/**
 * Fetch files from a public Google Drive folder
 * Note: This requires the folder to be publicly accessible
 * 
 * @param {string} folderId - Google Drive folder ID
 * @returns {Promise<Array>} Array of file objects
 */
export const fetchDriveFolder = async (folderId) => {
  try {
    const apiKey = DRIVE_CONFIG.API_KEY;
    
    if (!apiKey || apiKey === 'YOUR_GOOGLE_API_KEY') {
      console.warn('Please set up Google Drive API key for dynamic file loading');
      return [];
    }

    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType,thumbnailLink,webViewLink,webContentLink,iconLink)`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch files from Google Drive: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.files || [];
  } catch (error) {
    console.error('Error fetching Google Drive folder:', error);
    return [];
  }
};

/**
 * Parse file metadata for display
 * @param {Object} file - Google Drive file object
 * @returns {Object} Parsed file data
 */
export const parseFileMetadata = (file) => {
  const isImage = file.mimeType?.startsWith('image/');
  const isVideo = file.mimeType?.startsWith('video/');
  const isAudio = file.mimeType?.startsWith('audio/');

  // Use proper URLs for displaying content
  // For images: Use thumbnail with large size or direct view
  // For videos/audio: Use webContentLink if available
  let displayUrl;
  if (isImage) {
    // Use high-resolution thumbnail or direct download link
    displayUrl = file.thumbnailLink ? file.thumbnailLink.replace(/=s\d+/, '=s2000') : `https://drive.google.com/uc?export=view&id=${file.id}`;
  } else if (isVideo || isAudio) {
    // Use webContentLink for direct access or construct download URL
    displayUrl = file.webContentLink || `https://drive.google.com/uc?export=download&id=${file.id}`;
  } else {
    displayUrl = getDriveDirectUrl(file.id, 'view');
  }

  return {
    id: file.id,
    name: file.name,
    title: file.name.replace(/\.[^/.]+$/, ''), // Remove file extension for title
    type: isImage ? 'image' : isVideo ? 'video' : isAudio ? 'audio' : 'other',
    mimeType: file.mimeType,
    url: displayUrl,
    downloadUrl: file.webContentLink || getDriveDirectUrl(file.id, 'download'),
    thumbnail: file.thumbnailLink || getDriveThumbnailUrl(file.id),
    viewLink: file.webViewLink,
  };
};

/**
 * Instructions for setting up Google Drive integration:
 * 
 * 1. Create Google Cloud Project:
 *    - Go to https://console.cloud.google.com
 *    - Create a new project
 *    - Enable Google Drive API
 * 
 * 2. Get API Key:
 *    - Go to Credentials section
 *    - Create API Key
 *    - Restrict it to Google Drive API
 * 
 * 3. Share Your Folders:
 *    - Right-click folder in Google Drive
 *    - Click "Share" → "Get link"
 *    - Set to "Anyone with the link can view"
 *    - Copy the folder ID from the URL
 * 
 * 4. Update Configuration:
 *    - Replace folder IDs in DRIVE_CONFIG
 *    - Replace API_KEY in DRIVE_CONFIG
 * 
 * 5. File Formats:
 *    - Images: JPG, PNG, GIF, WEBP
 *    - Videos: MP4, WEBM, MOV
 *    - Audio: MP3, WAV, OGG
 */
