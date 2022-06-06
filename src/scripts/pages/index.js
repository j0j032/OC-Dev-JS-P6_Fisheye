const api = require("../components/api");
const factory = require("../factories/photographer");

const displayCards = (data) => {
  data.forEach((photographer) => {
    factory.getPhotographerCard(photographer);
  });
};

const init = async () => {
  const photographers = await api.getPhotographers();
  console.log(photographers);
  displayCards(photographers);
};

init();


