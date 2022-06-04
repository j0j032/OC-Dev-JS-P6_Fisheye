const { photographersSection } = require("./domLinker");

const createName = (tag, data) => {
  const cardName = document.createElement(tag);
  cardName.textContent = `${data.name}`;

  photographersSection.appendChild(cardName);
};

const createLocation = (tag, data) => {
  const cardLocation = document.createElement(tag);
  cardLocation.textContent = `${data.city}, ${data.country}`;

  photographersSection.appendChild(cardLocation);
};

module.exports = {
  createName,
  createLocation,
};
