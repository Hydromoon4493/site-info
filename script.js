// Array of quotes
const quotes = [
    "It's not a bug, it's an undocumented feature.",
    "It's not broken, it's just a different way of working.",
    "It's not an error, it's a design choice.",
    "That's not a flaw, it's a unique functionality.",
    "It’s not chaos, it’s organized chaos.",
    "It's totaly chaos.",
    "I’m not procrastinating, I’m prioritizing.",
    "I'm definitely procrastinating.",
    "I’m tired, I’m going to taking a break.",
    "That's not a crash, it’s an unscheduled restart.",
];

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}

// Call the function when the page loads
window.onload = displayRandomQuote;
