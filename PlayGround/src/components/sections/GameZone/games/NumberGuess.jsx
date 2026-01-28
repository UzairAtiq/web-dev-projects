import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './NumberGuess.module.css';

const NumberGuess = () => {
  const [targetNumber, setTargetNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('Guess a number between 1 and 100!');
    setAttempts(0);
    setGameOver(false);
    setHistory([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const guessNum = parseInt(guess);

    if (isNaN(guessNum) || guessNum < 1 || guessNum > 100) {
      setMessage('Please enter a valid number between 1 and 100');
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    const newHistory = [...history, { num: guessNum, attempt: newAttempts }];
    setHistory(newHistory);

    if (guessNum === targetNumber) {
      setMessage(`🎉 Congratulations! You found it in ${newAttempts} attempts!`);
      setGameOver(true);
    } else if (guessNum < targetNumber) {
      const diff = targetNumber - guessNum;
      if (diff > 20) setMessage('🥶 Too low! Way off!');
      else if (diff > 10) setMessage('❄️ Too low! Getting warmer...');
      else setMessage('🔥 Too low! You\'re close!');
    } else {
      const diff = guessNum - targetNumber;
      if (diff > 20) setMessage('🥵 Too high! Way off!');
      else if (diff > 10) setMessage('☀️ Too high! Getting warmer...');
      else setMessage('🔥 Too high! You\'re close!');
    }

    setGuess('');
  };

  return (
    <div className={styles.game}>
      <motion.div
        className={styles.gameCard}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className={styles.gameTitle}>🎯 Number Guessing Game</h2>
        
        <motion.div
          className={`${styles.message} ${gameOver ? styles.success : ''}`}
          key={message}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {message}
        </motion.div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Attempts</span>
            <span className={styles.statValue}>{attempts}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Range</span>
            <span className={styles.statValue}>1-100</span>
          </div>
        </div>

        {!gameOver && (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Enter your guess"
              className={styles.input}
              min="1"
              max="100"
              autoFocus
            />
            <motion.button
              type="submit"
              className={styles.submitButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Guess
            </motion.button>
          </form>
        )}

        {gameOver && (
          <motion.button
            className={styles.resetButton}
            onClick={resetGame}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Play Again
          </motion.button>
        )}

        {history.length > 0 && (
          <div className={styles.history}>
            <h3 className={styles.historyTitle}>Guess History</h3>
            <div className={styles.historyList}>
              <AnimatePresence>
                {history.map((item, index) => (
                  <motion.div
                    key={index}
                    className={styles.historyItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className={styles.historyAttempt}>#{item.attempt}</span>
                    <span className={styles.historyNumber}>{item.num}</span>
                    <span className={styles.historyIndicator}>
                      {item.num === targetNumber && '✓'}
                      {item.num < targetNumber && '↑'}
                      {item.num > targetNumber && '↓'}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default NumberGuess;
