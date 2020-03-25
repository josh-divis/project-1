// A random array of quotes with a minimum of 2 properties
var quotes = [{
    quote: "In the event of a water landing, I have been designed to serve as a flotation device.",
    source: "Data",
    citation: "Star Trek: Insurrection",
    year: " "+1998,
    tag: " Humor"
}, {
    quote: "Your Mother was a hamster and your Father smelled of Elderberries",
    source: "French Soldier",
    citation: "Monty Python and the Holy Grail",
    year: " "+1975,
    tag: " Humor"
}, {
    quote: "Make 'em laugh",
    source: "Cosmo Brown",
    citation: "Singing in the Rain",
    year: " "+1952,
    tag: " Humor"
}, {
    quote: "You're an idiot",
    source: "My Mom",
    year: "At least once a month since about " + 1984
}, {
    quote: "To do a great right, do a little wrong",
    source: "William Shakespeare"
}, {
    quote: "One song! I have but one song.",
    source: "Prince Phillip",
    citation: "Sleeping Beauty",
    year: " " +1959
}];
// A ramdom array of colors
var colors = [{
    color: 'blue' }, {
    color: 'green'}, {
    color: 'grey'}, {
    color: 'red'}, {
    color: 'violet'
    }];

// Uses the Math.random() method to get a number based on the length of the quotes array.
// then returns the selected quote.
function getRandomQuote() {
    'use strict';
    var num = Math.ceil(Math.random() * quotes.length)-1;
    return quotes[num];
}
// Uses the Math.random() method to get a number based on the length of the colors array.
// then returns the selected color.
getRandomQuote();
function getRandomColor() {
    var num = Math.ceil(Math.random()*colors.length)-1;
    return colors[num];
}

// Concatenates the code to produce the quote to the document, then prints the quote.
function printQuote() {
    'use strict';
    var quote = getRandomQuote();  /* Stores our quote so we can use dot notation.*/
    var quoteHTML = '<p class="quote">'+quote.quote+'</p>  <p class="source">'+quote.source;
    // Checks if the quotes have additional properties. If true it concatenates the code to quoteHTML.  
    if (quote.citation) {
        quoteHTML += '<span class="citation">'+quote.citation+'</span>';
    }
    if (quote.year) {
        quoteHTML += '<span class="year">'+quote.year+'</span>';
    }
    if (quote.tag) {
        quoteHTML += '<span class="tag">'+quote.tag+'</span>';
    }
    quoteHTML += '</p>';// Adds the closing p tag so the browser can read the HTML
    document.body.style.backgroundColor = getRandomColor().color;
    document.getElementById('quote-box').innerHTML = quoteHTML;

 }
//Makes the printQuote function run at an interval of 12 seconds
 setInterval(() => {
    printQuote();
 }, 12000);// 12000 sets the interval to change the quote and color at 12 seconds 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
