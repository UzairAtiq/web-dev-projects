import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PictureGallery.module.css';

/**
 * Picture Gallery Section
 * Displays images from Google Drive in beautiful modern frames
 */
const PictureGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Placeholder images - will be replaced with Google Drive images
  useEffect(() => {
    // Simulating image load - replace with actual Google Drive integration
    const placeholderImages = [
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
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
        title: 'Desert Dunes',
        description: 'Sandy desert landscape'
      },
      {
        id: 5,
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        title: 'Beach Paradise',
        description: 'Tropical beach scene'
      },
      {
        id: 6,
        url: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5',
        title: 'City Lights',
        description: 'Urban night photography'
      }
    ];

    setTimeout(() => {
      setImages(placeholderImages);
      setLoading(false);
    }, 800);
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
                src={`${image.url}?w=600&h=400&fit=crop`}
                alt={image.title}
                className={styles.image}
                loading="lazy"
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
                src={`${selectedImage.url}?w=1200&h=800&fit=crop`}
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
