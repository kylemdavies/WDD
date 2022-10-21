const steps = ["one", "two", "three"];
function listitemTemplate(item) {
    return `<li>${item}</li>` ;
}
const htmlStrings = steps.map(listitemTemplate)
const myList = document.querySelector("#myList");
const html = htmlStrings.join("")
myList.innerHTML = html
console.log(html)

const grades = ["A", "B", "C"];
function gradeToGPA(item) {
    let points = 0
    switch (item) {
        case "A":
            points = 4;
            break;
        case "B":
            points = 3;
            break;
        case "C":
            points = 2;
            break;
        default:
            points = 1;
            break;
    }
    return points;
}
const gpaPoints = grades.map(gradeToGPA);
console.log(gpaPoints);
function sumPoints(total, current){
    return total + current;
}
const average = gpaPoints.reduce(sumPoints, 0)/gpaPoints.length;
console.log(average);

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortWords = fruits.filter((word) => word.length < 6);
console.log(shortWords)

const meals = [
    {name: "Curry", catagory: "Indian", prepTime:"10min", cookTime: "20min", pic: "https://www.https://www.allrecipes.com/thmb/wHaENcWU-V4KMkkjXo3Er6YuPi8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/212721-Indian-Chicken-Curry-Murgh-Kari-mfs_005-8570fd9bcab845519550c6ff5c71e213.jpg"},
    {name: "Tacos", catagory: "Mexican", prepTime:"10min", cookTime: "20min", pic: "https://www.seekpng.com/ima/u2t4u2e6i1u2o0o0/.html"},
    {name: "Chicken Alfredo", catagory: "Italian", prepTime:"10min", cookTime: "20min", pic: "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-V3-800x1067.jpg"}
]

// expects one meal then formats it
function mealTemplate(meal){
    return `<li class="meal-card"><img src="${meal.pic}"><h2>${meal.name}</h2><p class="meal-catagory">${meal.catagory}</p><p>PrepTime: ${meal.prepTime}</p><p>CookTime: ${meal.cookTime}</p></li>`
}

function renderMeals(){
    const htmlMeals = meals.map(mealTemplate)
    const newUl = document.createElement('ul');
    newUl.classList.add("meal-list")
    newUl.insertAdjacentHTML("afterbegin", htmlMeals.join(''));
    document.querySelector("main").insertAdjacentElement("beforeend", newUl);
}

renderMeals()