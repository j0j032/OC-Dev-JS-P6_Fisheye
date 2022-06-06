const { createCardElements } = require("../components/dom")
const { photographersSection } = require("../components/domLinker")

const getPhotographerCard = (data) => {
  const {name, city, country, tagline, price, portrait} = data
  const cardLocation = `${city}, ${country}`
  const cardPricing = `${price}€/jour`
  const profilePicture = `/src/assets/photographers/${portrait}`;

  const createImg = (attribute, parent) => {
    let profilePic = new Image(100, 100);
    profilePic.src = profilePicture;
    profilePic.alt = `Portrait de ${name}`;
    profilePic.classList.add(attribute);
  
    parent.appendChild(profilePic);
  };

  const createCardLink = (parent) => {
    const cardLink = document.createElement("a");
    cardLink.classList.add("card__link");
    cardLink.href = "photographer.html";
    parent.appendChild(cardLink);

    createImg("card__pic", cardLink)
    createCardElements("h2", name, "card__name", cardLink)
    }
  
  const createCard = () =>{
    const card = document.createElement("div")
    card.classList.add("card")
    photographersSection.appendChild(card)

    createCardLink(card)
    createCardElements("p", cardLocation, "card__location", card)
    createCardElements("p", tagline, "card__tagline", card)
    createCardElements("p", cardPricing, "card__price", card)
  }
  createCard()
}

module.exports ={
   getPhotographerCard
}