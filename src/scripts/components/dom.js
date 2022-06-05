const { photographersSection } = require("./domLinker");

const createImg = (data, attribute) => {
  const portrait = `/src/assets/photographers/${data.portrait}`;
  let picture = new Image(100, 100);
  picture.src = portrait;
  picture.alt = `Portrait de ${data.name}`;
  picture.classList.add(attribute);

  photographersSection.appendChild(picture);
};

const createName = (tag, data, attribute) => {
  const cardName = document.createElement(tag);
  cardName.textContent = `${data.name}`;
  cardName.classList.add(attribute);

  photographersSection.appendChild(cardName);
};

const createLocation = (tag, data, attribute) => {
  const cardLocation = document.createElement(tag);
  cardLocation.textContent = `${data.city}, ${data.country}`;
  cardLocation.classList.add(attribute);

  photographersSection.appendChild(cardLocation);
};
const createTagLine = (tag, data, attribute) => {
  const cardTagLine = document.createElement(tag);
  cardTagLine.textContent = `${data.tagline}`;
  cardTagLine.classList.add(attribute);

  photographersSection.appendChild(cardTagLine);
};

const createPrice = (tag, data, attribute) => {
  const cardPrice = document.createElement(tag);
  cardPrice.textContent = `${data.price}`;
  cardPrice.classList.add(attribute);

  photographersSection.appendChild(cardPrice);
};

module.exports = {
  createName,
  createLocation,
  createTagLine,
  createPrice,
  createImg,
};
