let apodUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"

async function getApod(url) {
    let response = await fetch(url);
    console.log(response);
    if(response.ok){
    const data = response.json();
    photoTemplate(data);
    }
}

function photoTemplate(info) {
    return `<section class="photo">
    <img src=${info.url} alt="${info.title}">
    <div class="description">
    `
}

getApod(apodUrl);