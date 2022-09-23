const favoriteFoods = ["pizza", "spagetti", "cheeseburgers"]

const foodParagraph = document.createElement("p");
foodParagraph.innerHTML = `My favorite foods are: ${favoriteFoods[0]}, ${favoriteFoods[1]}, and ${favoriteFoods[2]}!`
document.getElementById("output").innerHTML += foodParagraph.innerHTML;

console.log("It worked!")

const today = new Date().toDateString();
document.getElementById("today").innerHTML += today;