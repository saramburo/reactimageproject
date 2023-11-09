//script to call appi https://pokeapi.co/

//https://codepen.io/ElvisGmz_/details/MWyeqeJ

let images = [];
const baseUrl = "https://pokeapi.co/api/v2/";

const callPoke = async () => {
  const initId = 32;
  const limit = 12;
  const queryParams = `pokemon?limit=${limit}&offset=${initId}`;
  const urlToFetch = baseUrl + queryParams;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log("Request failed");
  }
};

const callPokePhoto = async (pokeName) => {
  const queryParams = `pokemon/${pokeName}`;
  const urlToFetch = baseUrl + queryParams;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log("Request Poke failed");
  }
};

export { callPoke, callPokePhoto };
