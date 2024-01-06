let url = "https://quote-garden.onrender.com/api/v3/quotes/random";
let btn = document.getElementById("btn");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

btn.addEventListener("click", async () => {
  getQuote();
});

async function getQuote() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    quote.innerHTML = data.data[0].quoteText;
    author.innerHTML = data.data[0].quoteAuthor;
  } catch (e) {
    console.log("error - ", e);
  }
}
