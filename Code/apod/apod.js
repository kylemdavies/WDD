let apodUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"

async function getApod(url) {
    let response = await fetch(url);
    console.log(response);
    if(response.ok){
    const data = await response.json();
    article = document.querySelector(".article")
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

getApod(apodUrl);