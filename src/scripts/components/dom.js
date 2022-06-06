const factory= require("../factories/photographer");
const { photographersSection } = require("./domLinker");

const createCard = (data) => {
  const card = document.createElement("div");
  card.classList.add("card");
  photographersSection.appendChild(card);
  factory.createCardLink(card, data);
  factory.createLocation("p", data, "card__location", card);
  factory.createTagLine("p", data, "card__tagline", card);
  factory.createPrice("p", data, "card__price", card);
};

module.exports = {
  createCard,
};

 