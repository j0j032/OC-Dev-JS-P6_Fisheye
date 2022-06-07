// pattern to create an element in dom.js
// Link to DOM elements in domLinker.js
const { createElements } = require("../components/dom")
const { setParent} = require("../components/dom")
const domLink = require("../components/domLinker")

/**
 * Factory to fill a photographer profile informations if display on hompage, display as a 'card' else if on photographer profile page display as a 'header'
 * @param {object} data 
 */
const getPhotographerCard = (data) => {
  // turn data into var easy reusable
  const {name, id, city, country, tagline, price, portrait} = data
  const photographerLocation = `${city}, ${country}`
  const photographerPricing = `${price}€/jour`
  const profilePicture = `/src/assets/photographers/${portrait}`;
  const profilePictureAlt = `Portrait de ${name}`;
  const profileLink = `photographer.html?id=${id}`;
  const profileLinkAlabel = `lien vers la page de ${name}`;

  // Logic for home page and create a 'card'
  if (location.href === 'http://localhost:8087/')
  {
      /**
       * to set up a link to the photographer page (img and name)
       * @param {HTMLElement} parent to insert at the right place
       */
      const createCardLink = (parent) => {
        const cardLink = document.createElement("a");
        setParent(cardLink, "card__link", profileLinkAlabel,profileLink )
        parent.appendChild(cardLink);
        
        createElements('img', null,"card__pic",profilePictureAlt, profilePicture, profilePictureAlt, cardLink )
        createElements("h2", name, "card__name",name, null,null, cardLink)
      }
      /**
       * To create a card and get all the elements together 
       */
        const createCard = () =>{
        const card = document.createElement("div")
        setParent(card, "card", null,null )
        domLink.photographersSection.appendChild(card)

        createCardLink(card)
        createElements("p", photographerLocation, "card__location",photographerLocation , null,null, card)
        createElements("p", tagline, "card__tagline",tagline, null,null, card)
        createElements("p", photographerPricing, "card__price",price,null,null, card)
      }
    createCard()
    } 
    // Logic for photographer profile page and create a 'header'
    else if (location.href.includes('http://localhost:8087/photographer.html') )
    
    {
      const createProfileHeader = () => {
        createElements('img', null,"card__pic",profilePictureAlt, profilePicture, profilePictureAlt, domLink.photogHeadPic)
        createElements("h1", name, "card__name",name, null,null, domLink.photogHeadDescription)
        createElements("p", photographerLocation, "card__location",photographerLocation , null,null, domLink.photogHeadDescription)
        createElements("p", tagline, "card__tagline",tagline, null,null, domLink.photogHeadDescription)
      }
      createProfileHeader()
    }
}

module.exports ={
   getPhotographerCard
}