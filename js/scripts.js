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
  }

  return {
    getAll : getAll,
    add : add
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

let pokemonList = pokemonRepository.getAll();

 pokemonList.forEach(function(pokemon) {
    console.log(pokemon.name + ' height: ' + pokemon.height + ' ' + pokemon.types );
    document.write('<p>' + pokemon.name + ' height: '  + pokemon.height + ' ' + pokemon.types + '</p>');
 })
