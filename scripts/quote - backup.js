function init() {
console.log("Getting quotes...")
  fetch("files/quotes.txt")
  .then(response => response.text())
  .then(textString => {
    console.log(textString)
    quotes = textString.split(/\r\n|\r|\n/);
    console.log(quotes);
var len = quotes.length;
console.log("Number of quotes: ")
console.log(len);
var selectedNum = Math.floor(Math.random() * (len));
console.log("Random number is ")
console.log(selectedNum)
var selectedQuote = quotes[selectedNum];
console.log("Random quote is ")
console.log(selectedQuote);
document.getElementById("quote").innerHTML = selectedQuote;
  });
}

window.onload = init;