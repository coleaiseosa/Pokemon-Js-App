let pokemonRepository = (function() {
  let pokemonList = [ // creating an array of objects
    {
      name : 'Bulbasaur',
      height : 0.7,
      types : ['grass', 'poison']
    },
    {
      name : 'Charizard',
      height : 1.7,
      types : ['fire', 'flying']
    },
    {
      name : 'Butterfree',
      height : 1.1,
      types : ['bug', 'flying']
    },
    {
      name : 'Kakuna',
      height : 0.6,
      types : ['bug', 'poison']
    }
  ];

  function getAll() {
    return pokemonList;
  };

  function add(item) {
    return pokemonList.push(item) ? {} : '';
    // pokemonList.push(item)
  };

  function addListItem(pokemon) {
    let allPokemon = document.querySelector('.pokemon-list');

    let listItem = document.createElement('li');

    let button = document.createElement('button');
    button.innerText = pokemon.name; //to enable the for each loob return each name of the pokemon characters do not put the pokemon.name in quotation marks

     //listens to clicks on the pokemon buttons created and returns the information of the button
    button.addEventListener('click', function(event) { // the event in the function can be any word but its best to stick with event
      showDetails(pokemon); //event handler
    })

    button.classList.add('button');
    listItem.appendChild(button);
    allPokemon.appendChild(listItem);

  };

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  // function newButtons(pokemon) {
  //     let button = document.createElement('button');
  //     showDetails(pokemon)
  // }

  return {
    getAll : getAll,
    add : add,
    addListItem : addListItem,

  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Ivysaur', height: 1, types : ['grass', 'poison']});

// for (let i = 0; i < pokemonList.length; i++ ) { to loop through each pokemon character
//   if  (pokemonList[i].height > 1.5) {
//     document.write('<p>' + pokemonList[i].name + ' height: '  + pokemonList[i].height + ' -Wow, that\'s big!' + '</p>');
//   } else {
//       document.write('<p>' + pokemonList[i].name + ' height: '  + pokemonList[i].height + '</p>');  the <br> tag added a line break while the <p> tag also adds a line break and puts each pokemon in a different paragraph
//   }
// }

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
