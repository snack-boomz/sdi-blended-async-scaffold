# JavaScript Async Workshop

## Project Instructions

* Create a command line application that processes a string representing a Pokemon type (i.e. "electric") and writes each Pokemon's `names` and `moves` on a new line to a file named `output.txt` according to the pokeapi.co API. (If you don't know what a command line application, feel free to look online or check out [this](https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs) article)
* Some pokemon found on the pokeapi will occasionally not contain any moves. If your application encounters a pokemon with no moves the text written to the `output.txt` file should reflect the lack of moves found.

Example console input:
```js
node app.js "fire"
```

Example file output (`output.txt`):
```txt
fletchinder
razor-wind, swords-dance, fly, tackle, growl, ember, flamethrower, peck, toxic, agility, quick-attack, double-team, fire-blast, rest, substitute, thief, snore, flail, protect, swagger, steel-wing, attract, sleep-talk, return, frustration, hidden-power, sunny-day, heat-wave, will-o-wisp, facade, taunt, snatch, secret-power, overheat, aerial-ace, roost, natural-gift, tailwind, u-turn, me-first, flame-charge, round, incinerate, acrobatics, work-up, confide
torracat
scratch, swords-dance, double-kick, thrash, leer, bite, growl, roar, ember, flamethrower, toxic, double-team, lick, fire-blast, leech-life, fury-swipes, rest, substitute, protect, scary-face, outrage, swagger, attract, sleep-talk, return, frustration, hidden-power, sunny-day, torment, will-o-wisp, facade, taunt, overheat, bulk-up, u-turn, flare-blitz, shadow-claw, fire-fang, flame-charge, round, acrobatics, fire-pledge, work-up, confide
centiskorch-gmax
There were no moves found for this pokemon
...
```

* If an incorrect or mispelled type name is used (i.e. "muscle" or "firre") the text written to the `output.txt` file should reflect those errors.

Example console input:
```js
node app.js "firre"
```

Example file out (`output.txt`)
```txt
No matching type found for firre.
```

- Must use writeFile (async version)
- Must use promise.all
- API: https://pokeapi.co/

## Running the application

To set up this application, you will need to run the command `npm install` to install the `node-fetch` package. This package allows you to use the Fetch API from node processes without requiring a browser.

To run this application you will then need to enter the command `node app.js ${[String of pokemon type]}` in your terminal (i.e. `node app.js "electric"`). The `app.js` file `console.log()`'s `process.argv[2]`. `process.argv` is an array that contains the arguments passed in to a node command, the 2 index in that array is the first argument you pass to the node command.


## Stretch Goals
* Handle Pokemon name inputs. For example, if you were to input the command below, your application should create a new `pikachu.txt` file that contains the Pokemon's name, abilities, moves, evolutions, stats, and types in a readable format.
```javascript
node app.js "pikachu"
```
* Gracefully handle any errors that come from the API during any `Fetch` calls
* When a type is passed to the application, also include the encounter locations for each pokemon on a new line after the moves. This information can be further broken down to show encounter locations specific to each version of Pokemon game.
```javascript
Version(s) - Gold, Silver
viridian-forest-area, kanto-route-2-south-towards-viridian-city, ...
```
