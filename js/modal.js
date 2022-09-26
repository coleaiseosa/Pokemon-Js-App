function showModal(pokemon) {
    const modalBody = $('.modal-body');
    const modalTitle = $('.modal-title');
  
    // to clear existing modal contents
    modalTitle.empty();
    modalBody.empty();
  
    //to create elements in modal content
    const nameElement = $('<h1>' + pokemon.name + '</h1>');
    const imageElement = $('<img class="modal-img">');
    imageElement.attr('src', pokemon.imageUrl);
    const heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');
    const weightElement = $('<p>' + 'Weight: ' + pokemon.weight + '</p>');
    const typesElement = $('<p>' + 'Types: ' + pokemon.types + '</p>');
  
    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
  }