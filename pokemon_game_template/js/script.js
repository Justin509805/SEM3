const url = 'https://pokeapi.co/api/v2/pokemon';


function fetchPokemonData(pokemonId) {
    const apiUrl = `${url}/${pokemonId}`;
    return fetch(apiUrl).then (response => {
            if(!response.ok){
                throw new Error(`Failed to fetch data with ID ${pokemonId}`);
            }
            return response.json();
        });
}

// pokemon card content
function updatePokemonCard(cardElement, pokemonData){
    if(pokemonData){
        cardElement.querySelector('h2').textContent = pokemonData.species.name;
        cardElement.querySelector('img').src = pokemonData.sprites.front_default;
        cardElement.querySelector('span').textContent = pokemonData.stats[0].base_stat;
        cardElement.querySelector('.attacks').textContent = pokemonData.id;
        const pokemonType = pokemonData.types[0].type.name;
        cardElement.querySelector('.pokemon').classList.add(pokemonType);
    }
}






// fetch data and update it for two random pokemon 
function displayRandomPokemon(){
    const cardElements = document.querySelectorAll('.pokecard');

    for (let i =0; i < cardElements.length; i++){
        const randomPokemonId = Math.floor(Math.random() *151) +1;

        fetchPokemonData(randomPokemonId)
        .then(pokemonData => {
            updatePokemonCard(cardElements[i], pokemonData);
        });
        // .catch(error => {
        //     console.log(error.message);
        // });
    }
}


// when the page loads load pokemon
window.addEventListener('load', displayRandomPokemon);