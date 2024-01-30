quote = ["I", "am", "your", "friend"];
quote.pop();
quote.push("father");
quote.unshift("Luke");
console.log(quote);
console.log(quote[2]);

erroneousWord = "Luke";

let lukeIsHere = quote.find(n => { return n === erroneousWord});

let lukeIsAt;

if (lukeIsHere) {
    lukeIsAt= quote.findIndex(n => { return n === erroneousWord});
}

quote[lukeIsAt] = "No";

console.log(quote);