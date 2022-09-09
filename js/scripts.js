let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function getAll() {
    return pokemonList;
  };

  function add(pokemon) {
    return pokemonList.push(pokemon) ? {} : '';
     //pokemonList.push(item)
  };

//  another way to add the add function
//   function add(pokemon) {
//   if (typeof pokemon === "object" && "name" in pokemon) {
//     pokemonList.push(pokemon);
//   } else {
//     console.log('pokemon is not correct')
//   }
// }

  function addListItem(pokemon) {
    let allPokemon = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    //to enable the for each loob return each name of the pokemon characters do not put the pokemon.name in quotation marks
    button.innerText = pokemon.name;
    button.classList.add('button');
    listItem.appendChild(button);
    allPokemon.appendChild(listItem);
    //listens to clicks on the pokemon buttons created and returns the information of the button
    button.addEventListener('click', function(event) { // the event in the function can be any word but its best to stick with event
      showDetails(pokemon); //event handler
    });
  };

function showLoadingMessage() {
  console.log('Please wait a few minutes');
}

  //load list
  function loadList() {
    showLoadingMessage();
      return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
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
  showLoadingMessage();
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    // Now we add the details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
};

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    console.log(pokemon);
  });
}

  return {
    getAll : getAll,
    add : add,
    addListItem : addListItem,
    loadList : loadList,
    loadDetails : loadDetails,
    showDetails : showDetails,
    showLoadingMessage : showLoadingMessage
  };
})();

//console.log(pokemonRepository.getAll());
//pokemonRepository.add({name: 'Ivysaur', height: 1, types : ['grass', 'poison']});

// for (let i = 0; i < pokemonList.length; i++ ) { to loop through each pokemon character
//   if  (pokemonList[i].height > 1.5) {
//     document.write('<p>' + pokemonList[i].name + ' height: '  + pokemonList[i].height + ' -Wow, that\'s big!' + '</p>');
//   } else {
//       document.write('<p>' + pokemonList[i].name + ' height: '  + pokemonList[i].height + '</p>');  the <br> tag added a line break while the <p> tag also adds a line break and puts each pokemon in a different paragraph
//   }
// }

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
