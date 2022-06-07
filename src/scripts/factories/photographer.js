const { createCardElements } = require("../components/dom")
const { setParent} = require("../components/dom")
const domLink = require("../components/domLinker")

/**
 * Factory to fill a photographer profile card on home page
 * @param {object} data 
 */
const getPhotographerCard = (data) => {
  const {name, id, city, country, tagline, price, portrait} = data
  const cardLocation = `${city}, ${country}`
  const cardPricing = `${price}€/jour`
  const profilePicture = `/src/assets/photographers/${portrait}`;
  const profilePictureAlt = `Portrait de ${name}`;
  const profileLink = `photographer.html?id=${id}`;
  const profileLinkAlabel = `lien vers la page de ${name}`;


  /**
   * to set up a link to the photographer page (img and name)
   * @param {HTMLElement} parent to insert at the right place
   */
  const createCardLink = (parent) => {
    const cardLink = document.createElement("a");
    setParent(cardLink, "card__link", profileLinkAlabel,profileLink )
    parent.appendChild(cardLink);

    createCardElements('img', null,"card__pic",profilePictureAlt, profilePicture, profilePictureAlt, cardLink )
    createCardElements("h2", name, "card__name",name, null,null, cardLink)
    }
  
    /**
     * To get all the elements together and create a photographer card
     */
    if (location.href === 'http://localhost:8087/')
    {
      const createCard = () =>{
      const card = document.createElement("div")
      setParent(card, "card", null,null )
      domLink.photographersSection.appendChild(card)

      createCardLink(card)
      createCardElements("p", cardLocation, "card__location",cardLocation , null,null, card)
      createCardElements("p", tagline, "card__tagline",tagline, null,null, card)
      createCardElements("p", cardPricing, "card__price",price,null,null, card)
    }
  createCard()
    } 

    else if (location.href.includes('http://localhost:8087/photographer.html') )
    
    {
      const createProfileHeader = () => {
        createCardElements('img', null,"card__pic",profilePictureAlt, profilePicture, profilePictureAlt, domLink.photogHeadPic)
        createCardElements("h1", name, "card__name",name, null,null, domLink.photogHeadDescription)
        createCardElements("p", cardLocation, "card__location",cardLocation , null,null, domLink.photogHeadDescription)
        createCardElements("p", tagline, "card__tagline",tagline, null,null, domLink.photogHeadDescription)
      }
      createProfileHeader()
    }
}

module.exports ={
   getPhotographerCard
}