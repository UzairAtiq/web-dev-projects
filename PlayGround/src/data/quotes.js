/**
 * Anime Quotes Collection
 * Inspirational quotes from various anime series
 * New quote displayed on each page refresh
 */

export const quotes = [
  {
    id: 1,
    text: "The moment you think of giving up, think of the reason why you held on so long.",
    author: "Natsu Dragneel",
    anime: "Fairy Tail",
  },
  {
    id: 2,
    text: "If you don't take risks, you can't create a future.",
    author: "Monkey D. Luffy",
    anime: "One Piece",
  },
  {
    id: 3,
    text: "The world isn't perfect. But it's there for us, doing the best it can. That's what makes it so damn beautiful.",
    author: "Roy Mustang",
    anime: "Fullmetal Alchemist",
  },
  {
    id: 4,
    text: "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
    author: "Kenshin Himura",
    anime: "Rurouni Kenshin",
  },
  {
    id: 5,
    text: "Power comes in response to a need, not a desire. You have to create that need.",
    author: "Goku",
    anime: "Dragon Ball Z",
  },
  {
    id: 6,
    text: "People's lives don't end when they die. It ends when they lose faith.",
    author: "Itachi Uchiha",
    anime: "Naruto",
  },
  {
    id: 7,
    text: "Hard work is worthless for those that don't believe in themselves.",
    author: "Naruto Uzumaki",
    anime: "Naruto",
  },
  {
    id: 8,
    text: "Even if we forget the faces of our friends, we will never forget the bonds that were carved into our souls.",
    author: "Otonashi Yuzuru",
    anime: "Angel Beats",
  },
  {
    id: 9,
    text: "Being lonely is more painful than getting hurt.",
    author: "Monkey D. Luffy",
    anime: "One Piece",
  },
  {
    id: 10,
    text: "Knowing you're different is only the beginning. If you accept these differences you'll be able to get past them and grow.",
    author: "Iroh",
    anime: "Avatar: The Last Airbender",
  },
  {
    id: 11,
    text: "The ticket to the future is always open.",
    author: "Vash the Stampede",
    anime: "Trigun",
  },
  {
    id: 12,
    text: "A lesson without pain is meaningless. For you cannot gain something without sacrificing something else in return.",
    author: "Edward Elric",
    anime: "Fullmetal Alchemist",
  },
  {
    id: 13,
    text: "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger.",
    author: "Gildarts Clive",
    anime: "Fairy Tail",
  },
  {
    id: 14,
    text: "Simplicity is the easiest path to true beauty.",
    author: "Seishuu Handa",
    anime: "Barakamon",
  },
  {
    id: 15,
    text: "Life is not a game of luck. If you wanna win, work hard.",
    author: "Sora",
    anime: "No Game No Life",
  },
  {
    id: 16,
    text: "Sometimes I do feel like I'm a failure. Like there's no hope for me. But even so, I'm not gonna give up.",
    author: "Izuku Midoriya",
    anime: "My Hero Academia",
  },
  {
    id: 17,
    text: "It's not always possible to do what we want to do, but it's important to believe in something before you actually do it.",
    author: "Might Guy",
    anime: "Naruto",
  },
  {
    id: 18,
    text: "Push through the pain, giving up hurts more.",
    author: "Vegeta",
    anime: "Dragon Ball Z",
  },
  {
    id: 19,
    text: "Vision is not what your eyes see, but what your brain feels.",
    author: "Shōyō Hinata",
    anime: "Haikyuu!!",
  },
  {
    id: 20,
    text: "Moving on doesn't mean you forget about things. It just means you have to accept what's happened and continue living.",
    author: "Erza Scarlet",
    anime: "Fairy Tail",
  },
];

/**
 * Get a random quote from the collection
 * @returns {Object} A random quote object
 */
export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

/**
 * Get quote by ID
 * @param {number} id - Quote ID
 * @returns {Object|undefined} Quote object or undefined
 */
export const getQuoteById = (id) => {
  return quotes.find(quote => quote.id === id);
};
