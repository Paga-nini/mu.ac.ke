const quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    image: "https://via.placeholder.com/100/0000FF/FFFFFF/?text=FDR"
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    image: "https://via.placeholder.com/100/008000/FFFFFF/?text=AE"
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
    image: "https://via.placeholder.com/100/FF0000/FFFFFF/?text=TR"
  }
];

// Load random quote on page load
window.onload = function () {
  displayRandomQuote();
};

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById("quote-text").innerText = `"${quote.text}"`;
  document.getElementById("author-name").innerText = `- ${quote.author}`;
  document.getElementById("author-image").src = quote.image;
}

// Tip button functionality
function sendTip() {
  const trxAddress = "TKbZQ7yUugNFa9FVzANgz1APcyAsgLfjje";
  alert(`Please send your tip to the following TRX address:\n\n${trxAddress}`);
}
