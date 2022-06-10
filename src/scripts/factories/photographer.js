/* eslint-disable prettier/prettier */

// pattern to create an element in dom.js
// Link to DOM elements in domLinker.js
const { createElements, setParent } = require("../components/dom")
const domLink = require("../components/domLinker")

/**
 * Factory to fill a photographer 'Profile card' informations on homepage
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

       // To create a card and get all the elements together 
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
    
    /**
     * To fill profile header on photographer page
     * @param {object} data 
     */
    const getPhotographerProfileDetails = (data) => {
      // turn data into var easy reusable
      const {name, /* id, */ city, country, tagline, price, portrait} = data
      const photographerLocation = `${city}, ${country}`
      const profilePicture = `/src/assets/photographers/${portrait}`;
      const profilePictureAlt = `Portrait de ${name}`;
      const photographerPricing = `${price}€/jour`

      // Factory to inject profile details
      const createProfileHeader = () => {
        createElements('img', null,"card__pic",profilePictureAlt, profilePicture, profilePictureAlt, domLink.photogHeadPic)
        createElements("h1", name, "card__name",name, null,null, domLink.photogHeadDescription)
        createElements("p", photographerLocation, "card__location",photographerLocation , null,null, domLink.photogHeadDescription)
        createElements("p", tagline, "card__tagline",tagline, null,null, domLink.photogHeadDescription)
        createElements("p", photographerPricing,null, price, null, null, domLink.priceContainer  )
      }
      createProfileHeader()
    }
    
    /**
     * Factory to fill medias for each photographer on photographer page
     * @param {object} data 
     */
    const getPhotographersMedias = (data) => {
      // turn data into var easy reusable
      const {/* date, id, */ image,video, likes, /* photographerId, price, */ title} = data
      const mediaI = `../src/assets/medias/${image}`;
      const mediaV = `../src/assets/medias/${video}`;
      const mediaAlt = `${title}`;
      const mediaLikes = `${likes}`

      // to display one media 'Card' (media+infos)
      const createMediaCard = () => {
        const mediaContainer = document.createElement("div")
        setParent(mediaContainer, "media__container", null, null)
        domLink.mediasContainer.appendChild(mediaContainer)
        // Logic to inject by media type
        if(image){
          createElements('img', null, "media__img", mediaAlt, mediaI, mediaAlt, mediaContainer )
        }
        else if(video){
          const newVideo = document.createElement("video")
          setParent(newVideo, "media__video", mediaAlt, null)
          mediaContainer.appendChild(newVideo)
          createElements('source', null, null, mediaAlt, mediaV, mediaAlt, newVideo, "video/mp4")
        }

        // informations container (total of likes and photographer pricing)
        const mediaInfosContainer = document.createElement("div")
        setParent(mediaInfosContainer, "media__container--infos", null,null)
        mediaContainer.appendChild(mediaInfosContainer)

        createElements('p', mediaAlt, "media__title", mediaAlt, null, mediaAlt, mediaInfosContainer, null)

        const mediaLikesContainer = document.createElement("div")
        setParent(mediaLikesContainer, "media__container--likes", null, null)
        mediaInfosContainer.appendChild(mediaLikesContainer)

        createElements('p', mediaLikes, "media__likes", mediaLikes, null, mediaLikes, mediaLikesContainer, null)
        createElements('i',null, "fa-heart","icon coeur", null, "icon coeur", mediaLikesContainer, null, "fa-solid")
        
      }
      createMediaCard()
    }

module.exports = {getPhotographerCard,getPhotographerProfileDetails,getPhotographersMedias}