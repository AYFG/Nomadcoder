const quotes = [
  {
    quote:
      "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    author: "Samuel Beckett",
  },
  {
    quote: "Victory is sweetest when you've known defeat.",
    author: "Malcom S.Forbes",
  },
  {
    quote:
      "Do not be embarrassed by your failures, learn from them and start again.",
    author: "Richard Branson",
  },
  {
    quote: "We acquire the strength we have overcome.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Lighten up on yourself. No one is perfect. Gently accept your humanness.",
    author: "Deborah Day",
  },
  {
    quote: "Our strength grows out of our weaknesses",
    author: "Ralph Waldo Emerson",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.round(Math.random() * 5); // 반올림
// Math.Ceil(Math.random() * 5); // 올림
// console.log(quotes[Math.floor(Math.random() * quotes.length)]); // 내림
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // 내림

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
