
// added in array and objects within my array
// adding IIFE
let pokemonRepository = (function(){
let pokemonList=[
    {name:'Lopunny', height: 3, types:['normal','poison'] },
    {name:'Abra', height: 2, types:['pyschic', 'sleeper']},
    {name:'Rapidash', height:5 , types:['fire','runner']}
];  
   function add(pokemon){
    pokemmonList.push(pokemon);
   }
    function getAll(){
     return pokemonList;
   }
   function addListitem(pokemon){
      let pokemonList = document.querySelector(".pokemon-List");
      let listitem = document.createElement('Li');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listitem.appendChild(button);
      pokemonList.appendChild(listitem);
      button.addEventListener('click' , showDetails);
   }

   function showDetails(pokemon){
       console.log(pokemon.name);
   }
    return{
      add : add,
      getAll : getAll,
      addListitem : addListitem,
      showDetails : showDetails
   };
}  ) ();


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
pokemonRepository.getAll().forEach(function (pokemon) {
  
   pokemonRepository.addListitem(pokemon);
});