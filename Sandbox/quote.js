import renderQuote from "./RandomQuote.mjs";

renderQuote("#quoteContainer")

document.querySelector("#button").addEventListener("click", newQuote)

function newQuote() {
    renderQuote("#quoteContainer")
}