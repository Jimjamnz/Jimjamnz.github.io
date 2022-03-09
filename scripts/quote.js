function init() {
fetch("files/quotesSource.txt")
.then(response => response.text())
.then(textString => {
quotesSource = textString.split(/\r\n|\r|\n/);
});

fetch("files/quotes.txt")
.then(fetch("files/quotesSource.txt"))
.then(response => response.text())
.then(textString => {
quotes = textString.split(/\r\n|\r|\n/);


var len = quotes.length;
console.log("Number of quotes: ")
console.log(len);
var selectedNum = Math.floor(Math.random() * (len));
console.log("Random number is ")
console.log(selectedNum)
var selectedQuote = quotes[selectedNum];
var selectedQuoteSource = quotesSource[selectedNum];
console.log("Random quote is ")
console.log(selectedQuote);
document.getElementById("quote").innerHTML = `"`+selectedQuote+`"`+" - "+selectedQuoteSource;
  });
}

window.onload = init;