//Arguments passed in to a node command are part of the process.argv array
//The 0 index in the array is where your Node installation is stored
//The 1 index in the array is where the file you ran Node on is stored
//The 2 index in the array is the first argument you pass to the Node command after the file name
//See documentation here - https://nodejs.org/docs/latest/api/process.html#process_process_argv
const fetch = require('node-fetch');
const fs = require('fs');
//console.log("hello")

let type = process.argv[2]
//console.log( type );
let allPokemonForTypeUrl = []
let nameAndMoveArray = []
// https://www.geeksforgeeks.org/javascript-promise-all-method/

//user input fire
// find all pokemon types
//if fire return fire types
//

 const pokemonUrls = fetch(`https://pokeapi.co/api/v2/type/${type}`)
 .then(response => {return response.json()})
 .then((data) => {
     let pokemons = data.pokemon;
    //  console.log(pokemons);
     const fireUrls = pokemons.forEach((pokemonObj) => {
        allPokemonForTypeUrl.push(pokemonObj.pokemon.url)
        //access the url, find name, find moves, return name and moves
     })
     return allPokemonForTypeUrl;
    })
.then( urlArray=> {
    for (let i = 0; i < urlArray.length; i++){
        let url = fetch(urlArray[i])
        .then ( response => response.json())
        .then((data) => {
            let name = data.name;
            //console.log(name);
            // if (!data.moves[0].move)
            // data.moves[0].move.name
            // data.moves[1].move.name
            // data.moves[2].move.name
            let moves = data.moves; // data.moves[0][0]
            let newMoves = "";
            for (let iterator = 0; iterator < moves.length; iterator++) {
                if (!data.moves[iterator].move.name) {
                    console.log("does not have any move sets!");
                    newMoves += `${name} does not have any move sets.`;
                } else if(iterator === moves.length-1) { 
                    newMoves += `${ data.moves[iterator].move.name}`;
                } else {
                    newMoves += `${data.moves[iterator].move.name}, `;     
                }
            }
            if (moves.length === 0) {
                newMoves += `This pokemon does not have any move sets.`
            }
            let anything = `${name}\n${newMoves}\n`;
            return anything;
        })
        // fs.writeFile( 'output.txt, 'promises')
        nameAndMoveArray.push(url);
    }
    return nameAndMoveArray;
})
.catch(err => {
     nameAndMoveArray.push( new Promise(function (resolve, reject) {
        if (true){
            resolve(`No matching type found for ${type}, what is wrong with you ? : ${err} `);
        }
     })
     )
    /*
    var promise = new Promise(function(resolve, reject) {
        if ( everything turned out fine ) {
        resolve("Stuff worked!");
    */
        
})
let string = "";

setTimeout(function() {
    Promise.all(nameAndMoveArray).then(function(result) {
        for (let item of result) {
            string += item;
        }
        console.log('File Saved!')
        fs.writeFile('output.txt', string, function error(err){
             return `What have you done! \n${err}`
            
        });
    });
}, 2000)


/*setTimeout(function log(log){
    console.log(nameAndMoveArray)
}, 1000)
*/
// .then()

/*
const firePokemonUrls = fetch("https://pokeapi.co/api/v2/type/11")
.
    //    console.log(pokemonObj)
    } )
    console.log(allPokemonForType)
})
*/

//}
/*

let whatIsType = new Promise('what is the type?')
let whatPokemons&moves = new Promise('what pokemon(s) are there?)





wartortle
water slam
squirtle 
water splash, water slam

let promises = [ whatIsType, whatPokemon, whatMoves]
\*



//input string for pokemon type
const inputPokemonType = type => {

}
/*
 Passing an array of pending promises to Promise.all
 Promise.all(promises).then(response => document.write(response))
  var ask1 = FortuneTeller.ask(`Will it rain today?`);
  var ask2 = FortuneTeller.ask(`Should I order a salad?`);
  var ask3 = FortuneTeller.ask(`Should I even go outside today?`);
  var promises = [ask1, ask2, ask3];

  Promise.all(promises).then(function (result) {
    console.log(result);
});
*/

//create var for each type:
//type 1 = normal
//type 2 = fighting
//type 3 = flying
//type 4 = poison
//type 5 = ground
//type 6 = rock
//type 7 = bug
//type 8 = ghost
//type 9 = steel
//type 10 = fire
//type 11 = water
//type 12 = grass
//type 13 = electric
//type 14 = psychic
//type 15 = ice
//type 16 = dragon
//type 17 = dark
//type 18 = fairy
//type 19 = invalid input, check spelling (could return list, or url with list of types)
//type 20 = shadow

//fetch return info from pokeapi

//return names and move sets for each pokemon