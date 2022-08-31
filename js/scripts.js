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
]

for (let i = 0; i < pokemonList.length; i++ ) { // to loop through each pokemon character
  if  (pokemonList[i].height > 1.5) {
    document.write(pokemonList[i].name + ' height: '  + pokemonList[i].height + ' -Wow, that\'s big!' + '<br>');
  } else {
      document.write(pokemonList[i].name + ' height: '  + pokemonList[i].height + '<br>'); // the <br> tag added a line break
  }
}
