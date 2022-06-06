const { createCardElements } = require("../components/dom")
const { photographersSection } = require("../components/domLinker")

/**
 * Factory to fill a photographer profile card on home page
 * @param {object} data 
 */
const getPhotographerCard = (data) => {
  const {name, id, city, country, tagline, price, portrait} = data
  const cardLocation = `${city}, ${country}`
  const cardPricing = `${price}€/jour`
  const profilePicture = `/src/assets/photographers/${portrait}`;

  /**
   * To get and set up the profile picture
   * @param {string} attribute for css class
   * @param {HTMLElement} parent to insert at the right place
   */
  const createImg = (attribute, parent) => {
    let profilePic = new Image(100, 100);
    profilePic.src = profilePicture;
    profilePic.alt = `Portrait de ${name}`;
    profilePic.classList.add(attribute);
  
    parent.appendChild(profilePic);
  };

  /**
   * to set up a link to the photographer page (img and name)
   * @param {HTMLElement} parent to insert at the right place
   */
  const createCardLink = (parent) => {
    const cardLink = document.createElement("a");
    cardLink.classList.add("card__link");
    cardLink.href = `photographer.html?id=${id}`;
    parent.appendChild(cardLink);

    createImg("card__pic", cardLink)
    createCardElements("h2", name, "card__name", cardLink)
    }
  
    /**
     * To get all the elements together and create a photographer card
     */
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