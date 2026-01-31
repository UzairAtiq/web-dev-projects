import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './SpaceShooter.module.css';

const SpaceShooter = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [playerPos, setPlayerPos] = useState(50);
  const [bullets, setBullets] = useState([]);
  const [enemies, setEnemies] = useState([]);
  const gameRef = useRef(null);

  // Player movement
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setPlayerPos((prev) => Math.max(5, prev - 5));
      } else if (e.key === 'ArrowRight') {
        setPlayerPos((prev) => Math.min(95, prev + 5));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameStarted, gameOver]);

  return (
    <div className={styles.spaceShooter} ref={gameRef}>
      <div className={styles.header}>
        <h2 className={styles.title}>Space Shooter</h2>
        <div className={styles.score}>Score: {score}</div>
      </div>
      
      {!gameStarted ? (
        <div className={styles.startScreen}>
          <h3>Ready to defend Earth?</h3>
          <p>Use arrow keys to move</p>
          <p>Press SPACE to shoot</p>
          <button className={styles.startButton}>
            Start Game
          </button>
        </div>
      ) : null}

      {gameStarted && !gameOver && (
        <div className={styles.gameArea}>
          <motion.div
            className={styles.player}
            style={{ left: `${playerPos}%` }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            🚀
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SpaceShooter;
