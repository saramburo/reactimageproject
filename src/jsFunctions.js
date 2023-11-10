//functions that help working with api

import { callPokeLink } from "./appi";

//Crear un objeto con las keys id, sprites y name de 12 pokemones
/*

acceder a cada direccion/pokemon. se usa la funcion appi para esto
tomar los 3 keys de cada direccion/pokemon y ponerlos en un objeto
incluir ese objeto en un array



*/
async function organizeObjectToPokeList(pokeNameArray) {
  let pokeMainArray = [];
  let pokeAttributes = {};
  for (let poke of pokeNameArray) {
    pokeAttributes = await callPokeLink(poke);
    pokeMainArray.push(pokeAttributes);
  }

  return pokeMainArray;
}

export default organizeObjectToPokeList;
