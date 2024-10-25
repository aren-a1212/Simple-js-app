
// added in array and objects within my array
let pokemonList=[
    {name:'Lopunny', height: 3, types:['normal','poison'] },
    {name:'Abra', height: 2, types:['pyschic', 'sleeper']},
    {name:'Rapidash', height:5 , types:['fire','runner']}
];        

//Use document.write() inside the loop’s code to write the Pokémon name on your website’s DOM.

//for(let i= 0; i < pokemonList.length; i++){
  //  document.write(
  //` ${pokemonList[i].name} (height: ${pokemonList[i].height}) <br>`)
    //}

//  add a conditional. The conditional should check if the height is above a certain value
let message = "";

for(let i= 0; i < pokemonList.length; i++){
   if(pokemonList[i].height > 3){
      message = "- Wow, that's big!";
    } else if (pokemonList[i].height <= 3 ){
       message = "- Wow thats tiny !";
    }
    document.write(
       `${pokemonList[i].name} (height: ${pokemonList[i].height})  ${message}  <br>`);
}