const baseURL = "https://pokeapi.co/api/v2/pokemon"
const Pokemon = {
    ditto : "/ditto"
}

let results = null;

let output = document.querySelector("#output")

async function getPokemon(url, callback){
    const response = await fetch(url);
    if(response.ok) {
    const data = await response.json();
    // console.log(data);
    callback(data);
    }
}

function pokemonTemplate(pokemon) {
    const html = `<h2>${pokemon.name.toUpperCase()} : #${pokemon.id}</h2>
                <img src="${pokemon.sprites.other.home.front_default}" alt="Image of ${pokemon.name}">`
    return html
}   

function doStuff(data) {
    console.log(data)
    output.innerHTML = pokemonTemplate(data);
}

function doStuffList(data){
    const pokeListElement = document.querySelector("#output");
    const pokeList = data.results;
    pokeList.forEach((currentItm) => {
        const html = `<li data-url="${currentItm.url}">${currentItm.name}</li>`;
        pokeListElement.insertAdjacentHTML("beforeend", html);
    })
}

getPokemon(baseURL + Pokemon.ditto, pokemonTemplate)
getPokemon(baseURL + "?limit=800", doStuffList)