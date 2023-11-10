//script to call appi https://pokeapi.co/

//https://codepen.io/ElvisGmz_/details/MWyeqeJ

let images = [];
const baseUrl = "https://pokeapi.co/api/v2/";

const callPoke = async () => {
  let pokeArray = [];
  const initId = 45;
  const limit = 12;
  const queryParams = `pokemon?limit=${limit}&offset=${initId}`;
  const urlToFetch = baseUrl + queryParams;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const objectResults = jsonResponse.results;
      pokeArray = objectResults.map((poke) => poke.name);

      return pokeArray;
    }
  } catch (error) {
    console.log("Request failed");
  }
};

//traer informacion del pokemon
const callPokeLink = async (pokeId) => {
  const queryParams = `pokemon/${pokeId}`;
  const urlToFetch = baseUrl + queryParams;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const id = jsonResponse.id;
      const url = jsonResponse.sprites.front_default;
      const name = jsonResponse.name;
      const pokeObject = { id, url, name };
      return pokeObject;
    }
  } catch (error) {
    console.log("Request Poke failed");
  }
};

export { callPoke, callPokeLink };
