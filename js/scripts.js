
// added in array and objects within my array
// adding IIFE
let pokemonRepository = (function () {
let pokemonList = [];
let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";



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

   function addListitem(pokemon) {
      let pokemonList = document.querySelector(".pokemon-List");
      let listitem = document.createElement('li');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listitem.appendChild(button);
      pokemonList.appendChild(listitem);
      button.addEventListener('click', function () {
         showDetails(pokemon);
      });
   }
   function loadList(){
      return fetch(apiUrl).then(function(response){
         return response.json();
      }).then(function(json){
         json.results.forEach(function(item){
            let pokemon = {
               name:item.name,
               detailsUrl: item.url
            };
            add(pokemon);
         });
      }).catch(function (e){
         console.error(e);
      })
   }
 function loadDetails(item){
   let url = item.detailsUrl;
   return fetch(url).then(function(response){
      return response.json();
   }).then(function(details){
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.type = details.type;
   }).catch(function(e){
      console.error(e);
   });
 }
 function showDetails(item) {
    loadDetails(item).then(function(){
     console.log(item);
    });
   }
   
   return {
      add: add,
      getAll: getAll,
      addListitem: addListitem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails
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
pokemonRepository.loadList().then(function(){
 pokemonRepository.getAll().forEach(function (pokemon) {
   pokemonRepository.addListitem(pokemon);
});
})