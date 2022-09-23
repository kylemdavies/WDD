const favoriteFoods = ["pizza", "spagetti", "cheeseburgers"]

const foodParagraph = document.createElement("p");
foodParagraph.innerHTML = `My favorite foods are: ${favoriteFoods[0]}, ${favoriteFoods[1]}, and ${favoriteFoods[2]}!`
document.body.appendChild(foodParagraph)