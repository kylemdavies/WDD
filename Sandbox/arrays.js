const steps = ["one", "two", "three"];
function listitemTemplate(item) {
    return `<li>${item}</li>` ;
}

const htmlStrings = steps.map(listitemTemplate)

const myList = document.querySelector("#myList");

const html = htmlStrings.join("")

myList.innerHTML = html

console.log(html)