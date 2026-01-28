import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DRIVE_CONFIG, fetchDriveFolder, parseFileMetadata } from '../../../utils/googleDrive';
import styles from './PictureGallery.module.css';

/**
 * Picture Gallery Section
 * Displays images from Google Drive in beautiful modern frames
 */
const PictureGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        console.log('Fetching images from Drive folder:', DRIVE_CONFIG.IMAGES_FOLDER_ID);
        const files = await fetchDriveFolder(DRIVE_CONFIG.IMAGES_FOLDER_ID);
        console.log('Files received from Drive:', files);
        
        const imageFiles = files
          .filter(file => file.mimeType?.startsWith('image/'))
          .map((file, index) => {
            const metadata = parseFileMetadata(file);
            console.log('Parsed image metadata:', metadata);
            return {
              id: metadata.id,
              url: metadata.url,
              title: metadata.title,
              description: `Image ${index + 1}`,
              thumbnail: metadata.thumbnail,
            };
          });

        console.log('Total images processed:', imageFiles.length);
        
        if (imageFiles.length > 0) {
          setImages(imageFiles);
        } else {
          console.log('No images found, using placeholders');
          // Fallback to placeholder images if no Drive images found
          setImages([
            {
              id: 1,
              url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
              title: 'Mountain Landscape',
              description: 'Beautiful mountain vista'
            },
            {
              id: 2,
              url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
              title: 'Forest Path',
              description: 'Serene forest trail'
            },
            {
              id: 3,
              url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
              title: 'Ocean Sunset',
              description: 'Golden hour by the sea'
            },
          ]);
        }
      } catch (error) {
        console.error('Error loading images from Google Drive:', error);
        // Use placeholder images on error
        setImages([
          {
            id: 1,
            url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
            title: 'Mountain Landscape',
            description: 'Beautiful mountain vista'
          },
          {
            id: 2,
            url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
            title: 'Forest Path',
            description: 'Serene forest trail'
          },
          {
            id: 3,
            url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
            title: 'Ocean Sunset',
            description: 'Golden hour by the sea'
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <motion.div
          className={styles.loader}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <p>Loading gallery...</p>
      </div>
    );
  }

  console.log('Rendering gallery with images:', images);

  return (
    <div className={styles.gallery}>
      <div className={styles.header}>
        <h2 className={styles.title}>Picture Gallery</h2>
        <p className={styles.subtitle}>Explore beautiful images in modern frames</p>
      </div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {images.map((image) => (
          <motion.div
            key={image.id}
            className={styles.frame}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedImage(image)}
          >
            <div className={styles.imageWrapper}>
              <img
                src={image.url}
                alt={image.title}
                className={styles.image}
                loading="lazy"
                onError={(e) => {
                  console.error('Image failed to load:', image.url, e);
                  console.log('Image object:', image);
                }}
                onLoad={() => console.log('Image loaded successfully:', image.url)}
              />
              <div className={styles.overlay}>
                <h3 className={styles.imageTitle}>{image.title}</h3>
                <p className={styles.imageDesc}>{image.description}</p>
              </div>
            </div>
            <div className={styles.matting} />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className={styles.modalContent}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className={styles.modalImage}
              />
              <div className={styles.modalInfo}>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PictureGallery;
