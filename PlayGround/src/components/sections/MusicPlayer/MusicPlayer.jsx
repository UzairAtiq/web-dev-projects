import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './MusicPlayer.module.css';
import { DRIVE_CONFIG, fetchDriveFolder, parseFileMetadata } from '../../../utils/googleDrive';

/**
 * Music Player Section
 * Audio player with beautiful visualizer and playlist
 */
const MusicPlayer = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const animationIdRef = useRef(null);

  // Load songs from Google Drive
  useEffect(() => {
    const loadSongs = async () => {
      try {
        const files = await fetchDriveFolder(DRIVE_CONFIG.MUSIC_FOLDER_ID);
        
        // Filter for audio files only
        const audioFiles = files.filter(file => 
          file.mimeType && file.mimeType.startsWith('audio/')
        );

        if (audioFiles.length > 0) {
          const formattedSongs = audioFiles.map((file, index) => {
            const metadata = parseFileMetadata(file);
            return {
              id: metadata.id,
              title: metadata.title,
              artist: 'Unknown Artist',
              duration: 'N/A', // Duration not available from Drive API
              url: metadata.url,
              cover: metadata.thumbnail || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop'
            };
          });
          
          setSongs(formattedSongs);
          if (formattedSongs.length > 0) {
            setCurrentSong(formattedSongs[0]);
          }
        } else {
          // Fallback to placeholder songs
          const placeholderSongs = [
            {
              id: 1,
              title: 'Ambient Dreams',
              artist: 'Soundscape',
              duration: '3:45',
              url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
              cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop'
            },
            {
              id: 2,
              title: 'Neon Lights',
              artist: 'Synthwave',
              duration: '4:12',
              url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
              cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
            },
            {
              id: 3,
              title: 'Ocean Breeze',
              artist: 'Nature Sounds',
              duration: '5:20',
              url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
              cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop'
            },
            {
              id: 4,
              title: 'Digital Pulse',
              artist: 'Electronic',
              duration: '3:58',
              url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
              cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop'
            }
          ];

          setSongs(placeholderSongs);
          if (placeholderSongs.length > 0) {
            setCurrentSong(placeholderSongs[0]);
          }
        }
      } catch (error) {
        console.error('Error loading songs from Google Drive:', error);
        
        // Fallback to placeholder songs on error
        const placeholderSongs = [
          {
            id: 1,
            title: 'Ambient Dreams',
            artist: 'Soundscape',
            duration: '3:45',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop'
          },
          {
            id: 2,
            title: 'Neon Lights',
            artist: 'Synthwave',
            duration: '4:12',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
          },
          {
            id: 3,
            title: 'Ocean Breeze',
            artist: 'Nature Sounds',
            duration: '5:20',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
            cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop'
          },
          {
            id: 4,
            title: 'Digital Pulse',
            artist: 'Electronic',
            duration: '3:58',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
            cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop'
          }
        ];

        setSongs(placeholderSongs);
        if (placeholderSongs.length > 0) {
          setCurrentSong(placeholderSongs[0]);
        }
      }
    };

    loadSongs();
  }, []);

  // Initialize audio visualizer
  useEffect(() => {
    if (audioRef.current && !audioContextRef.current) {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      
      const source = audioContext.createMediaElementSource(audioRef.current);
      source.connect(analyser);
      analyser.connect(audioContext.destination);

      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);
    }
  }, []);

  // Visualizer animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !analyserRef.current) return;

    const ctx = canvas.getContext('2d');
    const analyser = analyserRef.current;
    const dataArray = dataArrayRef.current;

    const draw = () => {
      animationIdRef.current = requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      const WIDTH = canvas.width;
      const HEIGHT = canvas.height;
      const barWidth = (WIDTH / dataArray.length) * 2.5;

      ctx.fillStyle = 'rgba(15, 12, 41, 0.2)';
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      let x = 0;
      for (let i = 0; i < dataArray.length; i++) {
        const barHeight = (dataArray[i] / 255) * HEIGHT * 0.8;
        
        // Create gradient for bars
        const gradient = ctx.createLinearGradient(0, HEIGHT - barHeight, 0, HEIGHT);
        gradient.addColorStop(0, '#14b8a6');
        gradient.addColorStop(0.5, '#2dd4bf');
        gradient.addColorStop(1, '#5eead4');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
        
        // Add glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#14b8a6';
        
        x += barWidth + 2;
      }
    };

    if (isPlaying) {
      draw();
    }

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isPlaying]);

  const handleSongSelect = (song) => {
    setCurrentSong(song);
    setCurrentTime(0);
    if (audioContextRef.current?.state === 'suspended') {
      audioContextRef.current.resume();
    }
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        if (audioContextRef.current?.state === 'suspended') {
          audioContextRef.current.resume();
        }
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleNextSong = () => {
    const currentIndex = songs.findIndex(s => s.id === currentSong?.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    handleSongSelect(songs[nextIndex]);
  };

  const handlePrevSong = () => {
    const currentIndex = songs.findIndex(s => s.id === currentSong?.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    handleSongSelect(songs[prevIndex]);
  };

  return (
    <div className={styles.player}>
      <div className={styles.header}>
        <h2 className={styles.title}>Music Player</h2>
        <p className={styles.subtitle}>Experience music with stunning visualizations</p>
      </div>

      <div className={styles.content}>
        {/* Visualizer Section */}
        <motion.div
          className={styles.visualizerSection}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <canvas
            ref={canvasRef}
            className={styles.canvas}
            width={800}
            height={400}
          />
          
          {currentSong && (
            <div className={styles.nowPlaying}>
              <motion.img
                src={currentSong.cover}
                alt={currentSong.title}
                className={styles.albumCover}
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              <div className={styles.songInfo}>
                <h3 className={styles.songTitle}>{currentSong.title}</h3>
                <p className={styles.artist}>{currentSong.artist}</p>
              </div>
            </div>
          )}

          <div className={styles.controls}>
            <button
              className={styles.controlButton}
              onClick={handlePrevSong}
              aria-label="Previous song"
            >
              ⏮
            </button>
            <button
              className={styles.playButton}
              onClick={togglePlayPause}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button
              className={styles.controlButton}
              onClick={handleNextSong}
              aria-label="Next song"
            >
              ⏭
            </button>
          </div>

          <div className={styles.progressSection}>
            <span className={styles.time}>{formatTime(currentTime)}</span>
            <div className={styles.progressBar} onClick={handleSeek}>
              <div
                className={styles.progress}
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
            <span className={styles.time}>{formatTime(duration)}</span>
          </div>

          <div className={styles.volumeSection}>
            <span className={styles.volumeIcon}>🔊</span>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className={styles.volumeSlider}
            />
            <span className={styles.volumeValue}>{volume}%</span>
          </div>
        </motion.div>

        {/* Playlist Section */}
        <motion.div
          className={styles.playlistSection}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className={styles.playlistTitle}>Playlist</h3>
          <div className={styles.playlist}>
            {songs.map((song, index) => (
              <motion.div
                key={song.id}
                className={`${styles.playlistItem} ${
                  currentSong?.id === song.id ? styles.active : ''
                }`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, x: 5 }}
                onClick={() => handleSongSelect(song)}
              >
                <img src={song.cover} alt={song.title} className={styles.coverThumb} />
                <div className={styles.itemInfo}>
                  <h4 className={styles.itemTitle}>{song.title}</h4>
                  <p className={styles.itemArtist}>{song.artist}</p>
                </div>
                <span className={styles.itemDuration}>{song.duration}</span>
                {currentSong?.id === song.id && (
                  <motion.div
                    className={styles.playingIndicator}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    ♪
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <audio
        ref={audioRef}
        src={currentSong?.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNextSong}
      />
    </div>
  );
};

export default MusicPlayer;
