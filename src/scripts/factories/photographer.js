const createImg = (tag, data, attribute, parent) => {
  const portrait = `/src/assets/photographers/${data.portrait}`;
  let picture = new Image(100, 100);
  picture.src = portrait;
  picture.alt = `Portrait de ${data.name}`;
  picture.classList.add(attribute);

  parent.appendChild(picture);
};

const createName = (tag, data, attribute, parent) => {
  const cardName = document.createElement(tag);
  cardName.textContent = `${data.name}`;
  cardName.classList.add(attribute);

  parent.appendChild(cardName);
};

const createLocation = (tag, data, attribute, parent) => {
  const cardLocation = document.createElement(tag);
  cardLocation.textContent = `${data.city}, ${data.country}`;
  cardLocation.classList.add(attribute);

  parent.appendChild(cardLocation);
};
const createTagLine = (tag, data, attribute, parent) => {
  const cardTagLine = document.createElement(tag);
  cardTagLine.textContent = `${data.tagline}`;
  cardTagLine.classList.add(attribute);

  parent.appendChild(cardTagLine);
};

const createPrice = (tag, data, attribute, parent) => {
  const cardPrice = document.createElement(tag);
  cardPrice.textContent = `${data.price}€/jour`;
  cardPrice.classList.add(attribute);

  parent.appendChild(cardPrice);
};

const createCardLink = (parent, data) => {
  const cardLink = document.createElement("a");
  cardLink.classList.add("card__link");
  cardLink.href = "photographer.html";
  parent.appendChild(cardLink);
  createImg(null, data, "card__pic", cardLink);
  createName("h2", data, "card__name", cardLink);
};

module.exports ={
    createImg, createName, createLocation, createTagLine, createPrice, createCardLink 
}