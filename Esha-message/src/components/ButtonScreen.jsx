import { motion } from 'framer-motion'
import { useState } from 'react'

const ButtonScreen = ({ onButtonClick }) => {
  const [ripples, setRipples] = useState([])

  // Button configurations with different animations
  const buttons = [
    { text: 'Tap Me 💖', delay: 0, emoji: '💖' },
    { text: 'One More Surprise ✨', delay: 0.1, emoji: '✨' },
    { text: 'For You 💕', delay: 0.2, emoji: '💕' },
  ]

  // Create ripple effect on button click
  const createRipple = (event, buttonIndex) => {
    const button = event.currentTarget
    const rect = button.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const newRipple = {
      id: Date.now() + buttonIndex,
      x,
      y,
      size: Math.max(rect.width, rect.height),
    }

    setRipples((prev) => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
    }, 600)

    // Trigger main action on first button click
    if (buttonIndex === 0) {
      setTimeout(() => onButtonClick(), 300)
    }
  }

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  // Button animation variants
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <motion.div
      className="min-h-screen w-full gradient-romantic flex items-center justify-center p-4 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Floating background particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main content */}
      <motion.div
        className="flex flex-col items-center justify-center gap-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-romantic text-white text-shadow-romantic mb-4 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Welcome, Beautiful
        </motion.h1>

        <motion.div
          className="flex flex-col gap-6 items-center"
          variants={containerVariants}
        >
          {buttons.map((button, index) => (
            <motion.button
              key={index}
              className="relative px-8 py-4 md:px-12 md:py-5 rounded-full bg-white/90 backdrop-blur-md text-romantic-rose text-xl md:text-2xl font-semibold shadow-2xl overflow-hidden group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={(e) => createRipple(e, index)}
              style={{
                boxShadow: '0 10px 40px rgba(255, 107, 157, 0.4)',
              }}
            >
              {/* Ripple effects */}
              {ripples
                .filter((r) => r.id % 3 === index)
                .map((ripple) => (
                  <motion.span
                    key={ripple.id}
                    className="absolute rounded-full bg-romantic-rose/40"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      width: ripple.size,
                      height: ripple.size,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ scale: 0, opacity: 0.8 }}
                    animate={{ scale: 4, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                ))}

              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2">
                {button.text}
              </span>

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-romantic-rose/20 via-romantic-pink/20 to-romantic-lavender/20 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ButtonScreen

