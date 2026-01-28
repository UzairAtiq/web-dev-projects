/**
 * Google Drive Integration Utilities
 * Helper functions to fetch and parse files from Google Drive
 */

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
    // Note: This is a simplified approach
    // For production, you should use Google Drive API with API key
    const apiKey = 'YOUR_GOOGLE_API_KEY'; // User needs to add their API key
    
    if (apiKey === 'YOUR_GOOGLE_API_KEY') {
      console.warn('Please set up Google Drive API key for dynamic file loading');
      return [];
    }

    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType,thumbnailLink,webViewLink)`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch files from Google Drive');
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

  return {
    id: file.id,
    name: file.name,
    type: isImage ? 'image' : isVideo ? 'video' : isAudio ? 'audio' : 'other',
    mimeType: file.mimeType,
    url: getDriveDirectUrl(file.id, 'view'),
    downloadUrl: getDriveDirectUrl(file.id, 'download'),
    thumbnail: file.thumbnailLink || getDriveThumbnailUrl(file.id),
    viewLink: file.webViewLink,
  };
};

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
