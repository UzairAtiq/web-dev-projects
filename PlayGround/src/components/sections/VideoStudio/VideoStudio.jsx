import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './VideoStudio.module.css';
import { DRIVE_CONFIG, fetchDriveFolder, parseFileMetadata } from '../../../utils/googleDrive';

/**
 * Video Studio Section
 * Video player with playlist and hover preview functionality
 */
const VideoStudio = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const mainPlayerRef = useRef(null);
  const previewRefs = useRef({});

  // Load videos from Google Drive
  useEffect(() => {
    const loadVideos = async () => {
      setLoading(true);
      try {
        const files = await fetchDriveFolder(DRIVE_CONFIG.VIDEOS_FOLDER_ID);
        
        // Filter for video files only
        const videoFiles = files.filter(file => 
          file.mimeType && file.mimeType.startsWith('video/')
        );

        if (videoFiles.length > 0) {
          const formattedVideos = videoFiles.map((file, index) => {
            const metadata = parseFileMetadata(file);
            return {
              id: metadata.id,
              title: metadata.title,
              thumbnail: metadata.thumbnail,
              url: metadata.url,
              duration: 'N/A' // Duration not available from Drive API
            };
          });
          
          setVideos(formattedVideos);
          if (formattedVideos.length > 0) {
            setCurrentVideo(formattedVideos[0]);
          }
        } else {
          // Fallback to placeholder videos
          const placeholderVideos = [
            {
              id: 1,
              title: 'Mountain Adventure',
              thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop',
              url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              duration: '9:56'
            },
            {
              id: 2,
              title: 'Ocean Waves',
              thumbnail: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=225&fit=crop',
              url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
              duration: '10:53'
            },
            {
              id: 3,
              title: 'Forest Serenity',
              thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=225&fit=crop',
              url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
              duration: '15:13'
            },
            {
              id: 4,
              title: 'City Lights',
              thumbnail: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=225&fit=crop',
              url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
              duration: '14:48'
            }
          ];

          setVideos(placeholderVideos);
          if (placeholderVideos.length > 0) {
            setCurrentVideo(placeholderVideos[0]);
          }
        }
      } catch (error) {
        console.error('Error loading videos from Google Drive:', error);
        
        // Fallback to placeholder videos on error
        const placeholderVideos = [
          {
            id: 1,
            title: 'Mountain Adventure',
            thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop',
            url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            duration: '9:56'
          },
          {
            id: 2,
            title: 'Ocean Waves',
            thumbnail: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=225&fit=crop',
            url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            duration: '10:53'
          },
          {
            id: 3,
            title: 'Forest Serenity',
            thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=225&fit=crop',
            url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            duration: '15:13'
          },
          {
            id: 4,
            title: 'City Lights',
            thumbnail: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=225&fit=crop',
            url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
            duration: '14:48'
          }
        ];

        setVideos(placeholderVideos);
        if (placeholderVideos.length > 0) {
          setCurrentVideo(placeholderVideos[0]);
        }
      } catch (error) {
        console.error('Error loading videos from Google Drive:', error);
        
        // Fallback to placeholder videos on error
        const placeholderVideos = [
          {
            id: 1,
            title: 'Mountain Adventure',
            thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop',
            url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            duration: '9:56'
          },
          {
            id: 2,
            title: 'Ocean Waves',
            thumbnail: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=225&fit=crop',
            url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            duration: '10:53'
          },
          {
            id: 3,
            title: 'Forest Serenity',
            thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=225&fit=crop',
            url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            duration: '15:13'
          },
          {
            id: 4,
            title: 'City Lights',
            thumbnail: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=225&fit=crop',
            url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
            duration: '14:48'
          }
        ];

        setVideos(placeholderVideos);
        if (placeholderVideos.length > 0) {
          setCurrentVideo(placeholderVideos[0]);
        }
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
    setIsPlaying(true);
    if (mainPlayerRef.current) {
      mainPlayerRef.current.play();
    }
  };

  const handleMouseEnter = (video) => {
    setHoveredVideo(video);
    const previewElement = previewRefs.current[video.id];
    if (previewElement) {
      previewElement.currentTime = 0;
      previewElement.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (hoveredVideo) {
      const previewElement = previewRefs.current[hoveredVideo.id];
      if (previewElement) {
        previewElement.pause();
      }
    }
    setHoveredVideo(null);
  };

  const togglePlayPause = () => {
    if (mainPlayerRef.current) {
      if (isPlaying) {
        mainPlayerRef.current.pause();
      } else {
        mainPlayerRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100
      }
    })
  };

  return (
    <div className={styles.studio}>
      <div className={styles.header}>
        <h2 className={styles.title}>Video Studio</h2>
        <p className={styles.subtitle}>Watch your favorite videos with style</p>
      </div>

      <div className={styles.content}>
        {/* Main Video Player */}
        <motion.div
          className={styles.playerSection}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentVideo && (
            <div className={styles.playerWrapper}>
              <video
                ref={mainPlayerRef}
                className={styles.mainPlayer}
                src={currentVideo.url}
                poster={currentVideo.thumbnail}
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              <div className={styles.videoInfo}>
                <h3 className={styles.videoTitle}>{currentVideo.title}</h3>
                <div className={styles.videoMeta}>
                  <span className={styles.duration}>{currentVideo.duration}</span>
                  <button
                    className={styles.playButton}
                    onClick={togglePlayPause}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? '⏸' : '▶'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Video Playlist */}
        <motion.div
          className={styles.playlistSection}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className={styles.playlistTitle}>Playlist</h3>
          <div className={styles.playlist}>
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                className={`${styles.playlistItem} ${
                  currentVideo?.id === video.id ? styles.active : ''
                }`}
                custom={index}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.03, x: 5 }}
                onClick={() => handleVideoSelect(video)}
                onMouseEnter={() => handleMouseEnter(video)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={styles.thumbnailWrapper}>
                  <AnimatePresence>
                    {hoveredVideo?.id === video.id ? (
                      <motion.video
                        ref={(el) => (previewRefs.current[video.id] = el)}
                        className={styles.previewVideo}
                        src={video.url}
                        muted
                        loop
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    ) : (
                      <motion.img
                        src={video.thumbnail}
                        alt={video.title}
                        className={styles.thumbnail}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>
                  <div className={styles.durationBadge}>{video.duration}</div>
                </div>
                <div className={styles.itemInfo}>
                  <h4 className={styles.itemTitle}>{video.title}</h4>
                  {currentVideo?.id === video.id && (
                    <motion.div
                      className={styles.nowPlaying}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      Now Playing
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoStudio;
