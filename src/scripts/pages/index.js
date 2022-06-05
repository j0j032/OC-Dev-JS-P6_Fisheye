const api = require("../components/api");
const factory = require("../components/dom");

const displayCards = (data) => {
  data.forEach((photographer) => {
    factory.createCard(photographer);
  });
};

const init = async () => {
  const photographers = await api.getPhotographers();
  console.log(photographers);
  displayCards(photographers);
};

init();
