function getList(url){
    fetch(url)
      .then((res) => res.json())
      .then((pokemonList) => {
      document.querySelector("#list").innerHTML = ''
          console.log(pokemonList);
          pokemonList.results.forEach((pokemon) => {
              document.querySelector("#list").innerHTML +=
          `<button class="custom-btn btn-9" onclick="getData('${pokemon.url}')">${pokemon.name}</button>`
          ;
          });
     document.querySelector('#list').innerHTML +=` 
            <button class="custom-btn btn-9"
            onclick="getList('${pokemonList.previous}')">Previous</button>
            <button class="custom-btn btn-9" onclick="getList('${pokemonList.next}')">Next</button>`
      });
  }
  
  getList("https://pokeapi.co/api/v2/pokemon/")
  
  function getData(url) {
      fetch(url)
          .then((res) => res.json())
          .then(pokemon => {
              console.log(pokemon);
              document.querySelector('#results').innerHTML = 
          `<img src="${pokemon.sprites.front_default}" alt="">
          <h1>${pokemon.name}</h1>
          <h4>Ability: ${pokemon.abilities[0].ability.name}</h4>`
              ;
          });
  }
  getData("https://pokeapi.co/api/v2/pokemon/charizard")
  
  // function searchPokemon() {
  //   const searchTerm = document.querySelector("#search").value;
  // const url= "https://pokeapi.co/api/v2/pokemon/" + searchTerm;
  // getData(url);
  // }