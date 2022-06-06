const api = require("../components/api");
const factory = require("../factories/photographer");

/**
 * to display every photographer cards
 * @param {object} data from data.json
 */
const displayCards = (data) => {
  data.forEach((photographer) => {
    factory.getPhotographerCard(photographer);
  });
};

/**
 * To get data from data.json
 */
const init = async () => {
  const photographers = await api.getPhotographers();
  console.log(photographers);
  displayCards(photographers);
};

init();


