const baseURL = "https://pokeapi.co/api/v2/pokemon"
const Pokemon = {
    ditto : "/ditto"
}

let output = document.querySelector("#output")

async function getPokemon(url, callback){
    const response = await fetch(url);
    if(response.ok) {
    const data = await response.json();
    // console.log(data);
    callback(data)
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
    
}

getPokemon(baseURL + Pokemon.ditto, doStuff);
getPokemon(baseURL + "?limit=100", doStuffList)