import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TicTacToe.module.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line };
      }
    }

    if (squares.every(square => square !== null)) {
      return { winner: 'draw', line: [] };
    }

    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);

    const result = calculateWinner(newBoard);
    if (result) {
      setWinner(result.winner);
      setWinningLine(result.line);
      
      if (result.winner === 'draw') {
        setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
      } else {
        setScores(prev => ({ ...prev, [result.winner]: prev[result.winner] + 1 }));
      }
    }

    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningLine([]);
  };

  const resetScores = () => {
    setScores({ X: 0, O: 0, draws: 0 });
    resetGame();
  };

  return (
    <div className={styles.game}>
      <motion.div
        className={styles.gameCard}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className={styles.gameTitle}>❌⭕ Tic Tac Toe</h2>

        <div className={styles.scoreboard}>
          <div className={styles.scoreItem}>
            <span className={styles.scoreLabel}>X Wins</span>
            <motion.span
              className={styles.scoreValue}
              key={`x-${scores.X}`}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              style={{ color: '#ef4444' }}
            >
              {scores.X}
            </motion.span>
          </div>
          <div className={styles.scoreItem}>
            <span className={styles.scoreLabel}>Draws</span>
            <motion.span
              className={styles.scoreValue}
              key={`draws-${scores.draws}`}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              style={{ color: '#94a3b8' }}
            >
              {scores.draws}
            </motion.span>
          </div>
          <div className={styles.scoreItem}>
            <span className={styles.scoreLabel}>O Wins</span>
            <motion.span
              className={styles.scoreValue}
              key={`o-${scores.O}`}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              style={{ color: '#3b82f6' }}
            >
              {scores.O}
            </motion.span>
          </div>
        </div>

        <div className={styles.status}>
          {!winner ? (
            <motion.div
              key={isXNext ? 'x-turn' : 'o-turn'}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={styles.statusText}
            >
              Next Player: <span style={{ color: isXNext ? '#ef4444' : '#3b82f6', fontWeight: 800 }}>
                {isXNext ? 'X' : 'O'}
              </span>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`${styles.statusText} ${styles.winner}`}
            >
              {winner === 'draw' ? (
                "🤝 It's a Draw!"
              ) : (
                <>
                  🎉 Player <span style={{ color: winner === 'X' ? '#ef4444' : '#3b82f6', fontWeight: 800 }}>
                    {winner}
                  </span> Wins!
                </>
              )}
            </motion.div>
          )}
        </div>

        <div className={styles.board}>
          {board.map((cell, index) => {
            const isWinningCell = winningLine.includes(index);
            return (
              <motion.button
                key={index}
                className={`${styles.cell} ${isWinningCell ? styles.winning : ''}`}
                onClick={() => handleClick(index)}
                whileHover={!cell && !winner ? { scale: 1.05 } : {}}
                whileTap={!cell && !winner ? { scale: 0.95 } : {}}
                disabled={!!cell || !!winner}
              >
                <AnimatePresence>
                  {cell && (
                    <motion.span
                      className={styles.cellValue}
                      style={{ color: cell === 'X' ? '#ef4444' : '#3b82f6' }}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      {cell}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        <div className={styles.controls}>
          <motion.button
            className={styles.button}
            onClick={resetGame}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            New Game
          </motion.button>
          <motion.button
            className={`${styles.button} ${styles.secondaryButton}`}
            onClick={resetScores}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reset Scores
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default TicTacToe;
