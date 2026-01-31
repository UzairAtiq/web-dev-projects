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
    </div>
  );
};

export default SpaceShooter;
