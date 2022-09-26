const pokemonRepository = (function() {
  const pokemonList = [];
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=51';

  function getAll() {
    return pokemonList;
  };

  function add(pokemon) {
  if (typeof pokemon === 'object' && 'name' in pokemon && 'detailsUrl' in pokemon) {
    pokemonList.push(pokemon);
  } else {
    console.log('pokemon is not correct')
  }
}

  function addListItem(pokemon) {
    const allPokemon = document.querySelector('.pokemon-list');
    const listItem = document.createElement('li');
    //listItem.classList.add('list-group-item')
    const button = document.createElement('button');
    //to enable the for each loop return each name of the pokemon characters do not put the pokemon.name in quotation marks
    button.innerText = pokemon.name;
    button.classList.add('button');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemon-modal')
    button.classList.add('btn')
    listItem.appendChild(button);
    allPokemon.appendChild(listItem);
    //listens to clicks on the pokemon buttons created and returns the information of the button
    button.addEventListener('click', function(event) { // the event in the function can be any word but its best to stick with event
      showDetails(pokemon); //event handler
    });
  };

  //load list
  function loadList() {
      return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        const pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  };

//load details
function loadDetails(item) {
  const url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    // Now we add the details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types.map((type) => type.type.name).join(',');
    item.weight = details.weight;
  }).catch(function (e) {
    console.error(e);
  });
};

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    // console.log(pokemon);
    showModal(pokemon)
  });
}

//modal

  return {
    getAll,
    add,
    addListItem,
    loadList,
    loadDetails,
    showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
