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

  //load list
  function loadList() {
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
    // console.log(pokemon);
    showModal(pokemon)
  });
}

//modal
function showModal(pokemon) {
  let modalContainer = document.querySelector('#modal-container');

  modalContainer.innerHTML = '';

  //creating elements in DOM
  let modal = document.createElement('div');
  modal.classList.add('modal');

  let closeButtonElement = document.createElement('button');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.classList.add('modal-close');
  // enables the close button hide the modal
  closeButtonElement.addEventListener('click', hideModal)

  let titleElement = document.createElement('h1');
  titleElement.innerText = pokemon.name;

  let contentElement = document.createElement('p');
  contentElement.innerText = 'Height: ' + pokemon.height + 'm';

  let imageElement = document.createElement('img');
  imageElement.src = pokemon.imageUrl;
  //imageElement.style.width = '300px';

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modal.appendChild(imageElement);
  modalContainer.appendChild(modal);

  //adding a new class to the modalContainer
  modalContainer.classList.add('is-visible')

  //hides the modal when clicking on any random place outside the modal or on the modal Container
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal()
    }
  })
}

function hideModal() {
  let modalContainer = document.querySelector('#modal-container')
  modalContainer.classList.remove('is-visible');
}

// hides the modal by pressing the Esc key
window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if(e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
})


  return {
    getAll : getAll,
    add : add,
    addListItem : addListItem,
    loadList : loadList,
    loadDetails : loadDetails,
    showDetails : showDetails
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
