let apodUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
let date = document.querySelector("input")

async function getApod(url) {
    article = document.querySelector(".article")
    let response = await fetch(url);
    console.log(response);
    const data = await response.json();
    if(response.ok){
        article.innerHTML = photoTemplate(data);
        hideError()
    } else {
        showError(data.msg)
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

function showError(msg) {
    error = document.querySelector(".error");
    error.innerHTML = msg
    error.classList.remove("hide");
}

function hideError() {
    error = document.querySelector(".error");
    error.classList.add("hide");
}