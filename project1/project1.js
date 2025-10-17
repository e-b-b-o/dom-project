//Variable

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    person: "Walt Disney",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    person: "Winston Churchill",
  },
  {
    quote: "Don't let yesterday take up too much of today.",
    person: "Will Rogers",
  },
  {
    quote: "It's not whether you get knocked down, it's whether you get up.",
    person: "Vince Lombardi",
  },
  {
    quote:
      "If you are working on something exciting, it will keep you motivated.",
    person: "Steve Jobs",
  },
  {
    quote: "Do what you can with all you have, wherever you are.",
    person: "Theodore Roosevelt",
  },
  {
    quote:
      "You don't have to be great to start, but you have to start to be great.",
    person: "Zig Ziglar",
  },
  {
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it.",
    person: "Unknown",
  },
  {
    quote: "Dream bigger. Do bigger.",
    person: "Unknown",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    person: "Sam Levenson",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
