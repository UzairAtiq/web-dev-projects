import React, { useState, useEffect } from 'react';
import './Quote.css';

const Quote = () => {
  const [quote, setQuote] = useState({ text: '', character: '', anime: '' });
  const [loading, setLoading] = useState(true);

  const animeQuotes = [
    { text: "If you don't take risks, you can't create a future.", character: "Monkey D. Luffy", anime: "One Piece" },
    { text: "The world isn't perfect. But it's there for us, doing the best it can; that's what makes it so damn beautiful.", character: "Roy Mustang", anime: "Fullmetal Alchemist" },
    { text: "People's lives don't end when they die. It ends when they lose faith.", character: "Itachi Uchiha", anime: "Naruto" },
    { text: "Whatever you lose, you'll find it again. But what you throw away you'll never get back.", character: "Kenshin Himura", anime: "Rurouni Kenshin" },
    { text: "It's not the face that makes someone a monster, it's the choices they make with their lives.", character: "Naruto Uzumaki", anime: "Naruto" },
    { text: "Hard work is worthless for those that don't believe in themselves.", character: "Naruto Uzumaki", anime: "Naruto" },
    { text: "Knowing you're different is only the beginning. If you accept these differences you'll be able to get past them and grow even closer.", character: "Miss Kobayashi", anime: "Dragon Maid" },
    { text: "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder.", character: "Gildarts Clive", anime: "Fairy Tail" },
    { text: "Life is not a game of luck. If you wanna win, work hard.", character: "Sora", anime: "No Game No Life" },
    { text: "Simplicity is the easiest path to true beauty.", character: "Seishuu Handa", anime: "Barakamon" },
    { text: "Don't give up, there's no shame in falling down! True shame is to not stand up again!", character: "Shintaro Midorima", anime: "Kuroko's Basketball" },
    { text: "Vision is not what your eyes see, but an image that your brain comprehends.", character: "Touko Aozaki", anime: "The Garden of Sinners" },
    { text: "A person can change, at the moment when the person wishes to change.", character: "Haruhi Fujioka", anime: "Ouran High School Host Club" },
    { text: "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be.", character: "Naruto Uzumaki", anime: "Naruto" },
    { text: "Fake people have an image to maintain. Real people just don't care.", character: "Hachiman Hikigaya", anime: "My Teen Romantic Comedy SNAFU" },
  ];

  const getRandomQuote = () => {
    setLoading(true);
    const randomIndex = Math.floor(Math.random() * animeQuotes.length);
    setTimeout(() => {
      setQuote(animeQuotes[randomIndex]);
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="quote-container">
      <div className="quote-card">
        <div className="quote-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor"/>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
          </svg>
        </div>
        {loading ? (
          <div className="loading">Loading quote...</div>
        ) : (
          <>
            <p className="quote-text">{quote.text}</p>
            <div className="quote-author">
              <p className="character-name">{quote.character}</p>
              <p className="anime-name">{quote.anime}</p>
            </div>
          </>
        )}
        <button className="refresh-btn" onClick={getRandomQuote}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
