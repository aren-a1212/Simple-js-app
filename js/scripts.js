
// added in array and objects within my array
// adding IIFE
let pokemonRepository = (function () {
let pokemonList = [];
let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
let modalContainer = document.querySelector('#modal-container');




function add(pokemon) {
   if (
     typeof pokemon === "object" &&
     "name" in pokemon
   ) {
     pokemonList.push(pokemon);
   } else {
     console.log("pokemon is not correct");
   }
}
   function getAll() {
      return pokemonList;
   }
 


   function showDetails(pokemon) {
      loadDetails(pokemon).then(function() {
          showModal(
          pokemon.name, 
          'Height: ' + pokemon.height,
          pokemon.imageUrl
         );
      });
  }

  function addListItem(pokemon) {
      let pokemonList = document.querySelector('.pokemon-list');
      let listItem = document.createElement('li');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('pokemon-info');

      listItem.appendChild(button);
      pokemonList.appendChild(listItem);
      listItem.addEventListener('click', function(event) {
      pokemonRepository.showDetails(pokemon)
      });
  }

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
          });
      }).catch(function (e) {
          console.error(e);
      })
  }

  function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
          return response.json();
      }).then(function (details) {
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
      }).catch(function (e) {
          console.error(e);
      })
  }

  function showModal(title, text, img) {
      modalContainer.innerHTML = '';

      let modal = document.createElement('div');
      modal.classList.add('modal');

      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);

      let pokemonName = document.createElement('h1');
      pokemonName.innerText = title;

      let pokemonHeight = document.createElement('p');
      pokemonHeight.innerText = text;

      let pokemonImage = document.createElement('img');
      pokemonImage.setAttribute('src', img);
      pokemonImage.setAttribute('width', '100%');
      pokemonImage.setAttribute('height', '100%');

      modal.appendChild(closeButtonElement);
      modal.appendChild(pokemonName);
      modal.appendChild(pokemonHeight);
      modal.appendChild(pokemonImage);
      modalContainer.appendChild(modal);

      modalContainer.classList.add('is-visible');

      modalContainer.addEventListener('click', (e) => {
          let target = e.target;
          if (target === modalContainer) {
              hideModal();
          }
      });
  }

  function hideModal() {
      modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideModal();
      }
  });

  return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      showDetails: showDetails,
      loadList: loadList,
      loadDetails: loadDetails
  };
})();


//Use document.write() inside the loop’s code to write the Pokémon name on your website’s DOM.

//for(let i= 0; i < pokemonList.length; i++){
//  document.write(
//` ${pokemonList[i].name} (height: ${pokemonList[i].height}) <br>`)
//}

//  add a conditional. The conditional should check if the height is above a certain value
//let message = "";

//for(let i= 0; i < pokemonList.length; i++){
//  if(pokemonList[i].height > 3){
//     message = "- Wow, that's big!";
//  } else if (pokemonList[i].height <= 3 ){
//    message = "- Wow thats tiny !";
//  }
// document.write(
//   `${pokemonList[i].name} (height: ${pokemonList[i].height})  ${message}  <br>`);
//}
//PART 1 EX :1.5
//function myLoop(pokemon){
// document.write('<p>' + pokemon.name + ' | height: ' + pokemon.height + '| type:  '  +  pokemon.types   + '</p>');
//}
//pokemonList.forEach(myLoop);



//PART2 EX: 1.5
pokemonRepository.loadList().then(function() {
   pokemonRepository.getAll().forEach(function(pokemon) {
       pokemonRepository.addListItem(pokemon)
   });
 });