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
  const [leaderboard, setLeaderboard] = useState([]);
  const gameRef = useRef(null);

  useEffect(() => {
    loadLeaderboard();
  }, []);

  const loadLeaderboard = () => {
    const saved = localStorage.getItem('spaceShooterLeaderboard');
    if (saved) {
      setLeaderboard(JSON.parse(saved));
    }
  };

  const saveScore = (finalScore) => {
    const newScore = { score: finalScore, date: new Date().toLocaleDateString() };
    const updated = [...leaderboard, newScore]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    setLeaderboard(updated);
    localStorage.setItem('spaceShooterLeaderboard', JSON.stringify(updated));
  };

  // Player movement
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setPlayerPos((prev) => Math.max(5, prev - 5));
      } else if (e.key === 'ArrowRight') {
        setPlayerPos((prev) => Math.min(95, prev + 5));
      } else if (e.key === ' ') {
        e.preventDefault();
        shoot();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameStarted, gameOver, playerPos]);

  // Shoot bullets
  const shoot = () => {
    const newBullet = {
      id: Date.now(),
      x: playerPos,
      y: 85
    };
    setBullets((prev) => [...prev, newBullet]);
  };

  // Move bullets
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const interval = setInterval(() => {
      setBullets((prev) =>
        prev.filter((bullet) => bullet.y > 0).map((bullet) => ({ ...bullet, y: bullet.y - 2 }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, [gameStarted, gameOver]);

  // Spawn enemies
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const interval = setInterval(() => {
      const newEnemy = {
        id: Date.now(),
        x: Math.random() * 90 + 5,
        y: 5
      };
      setEnemies((prev) => [...prev, newEnemy]);
    }, 2000);

    return () => clearInterval(interval);
  }, [gameStarted, gameOver]);

  // Move enemies
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const interval = setInterval(() => {
      setEnemies((prev) =>
        prev.filter((enemy) => enemy.y < 90).map((enemy) => ({ ...enemy, y: enemy.y + 1 }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, [gameStarted, gameOver]);

  // Collision detection
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    bullets.forEach((bullet) => {
      enemies.forEach((enemy) => {
        const distance = Math.sqrt(
          Math.pow(bullet.x - enemy.x, 2) + Math.pow(bullet.y - enemy.y, 2)
        );
        if (distance < 5) {
          setBullets((prev) => prev.filter((b) => b.id !== bullet.id));
          setEnemies((prev) => prev.filter((e) => e.id !== enemy.id));
          setScore((prev) => prev + 10);
        }
      });
    });

    // Game over if enemy reaches bottom
    enemies.forEach((enemy) => {
      if (enemy.y > 85) {
        setGameOver(true);
        saveScore(score);
      }
    });
  }, [bullets, enemies, gameStarted, gameOver, score]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setPlayerPos(50);
    setBullets([]);
    setEnemies([]);
  };

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
          <button className={styles.startButton} onClick={startGame}>
            Start Game
          </button>
        </div>
      ) : null}

      {gameOver && (
        <div className={styles.gameOverScreen}>
          <h3>Game Over!</h3>
          <p>Final Score: {score}</p>
          <button className={styles.restartButton} onClick={startGame}>
            Play Again
          </button>
          {leaderboard.length > 0 && (
            <div className={styles.leaderboard}>
              <h4>🏆 Top Scores</h4>
              {leaderboard.map((entry, index) => (
                <div key={index} className={styles.leaderboardEntry}>
                  <span>#{index + 1}</span>
                  <span>{entry.score} pts</span>
                  <span>{entry.date}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

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

          {bullets.map((bullet) => (
            <div
              key={bullet.id}
              className={styles.bullet}
              style={{ left: `${bullet.x}%`, top: `${bullet.y}%` }}
            >
              •
            </div>
          ))}

          {enemies.map((enemy) => (
            <motion.div
              key={enemy.id}
              className={styles.enemy}
              style={{ left: `${enemy.x}%`, top: `${enemy.y}%` }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              👾
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpaceShooter;
