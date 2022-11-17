let apodUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
let date = document.querySelector("input")

async function getApod(url) {
    article = document.querySelector(".article")
    let response = await fetch(url);
    console.log(response);
    if(response.ok){
        const data = await response.json();
        article.innerHTML = photoTemplate(data);
    }
}
function photoTemplate(info) {
    return `<section class="photo">
    <img src=${info.url} alt="${info.title}">
    <div class="description">
    <h2>${info.title}</h2>
    <h3>${info.date}</h3>
    <p>${info.explanation}</p>
    </div>
    </section>
    `
}

document.querySelector(".button").addEventListener("click", getApodByDate)

async function getApodByDate(ev) {
    let apodImage = apodUrl + `&date=${date.value}`;
    await getApod(apodImage);
}
