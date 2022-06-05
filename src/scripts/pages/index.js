const api = require("../components/api");
const factory = require("../components/dom");

const displayCards = (data) => {
  data.forEach((photographer) => {
    factory.createImg(photographer, "card__pic");
    factory.createName("h1", photographer, "card__name");
    factory.createLocation("p", photographer, "card__location");
    factory.createTagLine("p", photographer, "card__tagline");
    factory.createPrice("p", photographer, "card__price");
  });
};

const init = async () => {
  const photographers = await api.getPhotographers();
  console.log(photographers);
  displayCards(photographers);
};

init();
