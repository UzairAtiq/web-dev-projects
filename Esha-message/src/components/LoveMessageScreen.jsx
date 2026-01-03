import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const LoveMessageScreen = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fullMessage = "I Love You, Esha ❤️"
  const [hearts, setHearts] = useState([])

  // Animate text letter by letter
  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < fullMessage.length) {
        setDisplayedText(fullMessage.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 100) // Adjust speed here (lower = faster)

    return () => clearInterval(interval)
  }, [])

  // Create floating hearts
  useEffect(() => {
    const createHeart = () => {
      const heart = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        delay: Math.random() * 2,
        size: 20 + Math.random() * 30,
      }
      setHearts((prev) => [...prev, heart])

      // Remove heart after animation
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== heart.id))
      }, 5000)
    }

    // Create hearts periodically
    const heartInterval = setInterval(createHeart, 800)
    
    // Initial burst of hearts
    for (let i = 0; i < 10; i++) {
      setTimeout(createHeart, i * 200)
    }

    return () => clearInterval(heartInterval)
  }, [])

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  }

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Heart animation variants
  const heartVariants = {
    initial: {
      y: '100vh',
      opacity: 0,
      scale: 0,
    },
    animate: (custom) => ({
      y: '-100vh',
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1, 0],
      x: [0, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100],
      transition: {
        duration: 5,
        delay: custom.delay,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <motion.div
      className="min-h-screen w-full gradient-romantic flex items-center justify-center p-4 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Floating hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-4xl"
          style={{
            left: `${heart.x}%`,
            bottom: 0,
          }}
          custom={{ delay: heart.delay }}
          variants={heartVariants}
          initial="initial"
          animate="animate"
        >
          ❤️
        </motion.div>
      ))}

      {/* Glowing particles in background */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-white/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main message */}
      <motion.div
        className="text-center z-10 max-w-4xl mx-auto"
        variants={containerVariants}
      >
        <motion.h1
          className="text-5xl md:text-8xl lg:text-9xl font-romantic text-white text-shadow-romantic mb-8 leading-tight"
          variants={textVariants}
        >
          {displayedText}
          {/* Blinking cursor effect */}
          {displayedText.length < fullMessage.length && (
            <motion.span
              className="inline-block w-1 h-16 md:h-24 bg-white ml-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          )}
        </motion.h1>

        {/* Additional romantic text that appears after main message */}
        {displayedText === fullMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8"
          >
            <motion.p
              className="text-2xl md:text-4xl text-white/90 font-light italic"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Forever and Always ✨
            </motion.p>
          </motion.div>
        )}

        {/* Decorative hearts around text */}
        {displayedText === fullMessage && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-3xl md:text-5xl"
                style={{
                  left: `${10 + (i % 4) * 25}%`,
                  top: `${20 + Math.floor(i / 4) * 60}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                💕
              </motion.div>
            ))}
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

export default LoveMessageScreen

