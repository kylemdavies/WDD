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