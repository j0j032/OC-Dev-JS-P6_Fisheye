/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */

// pattern to create an element in dom.js
// Link to DOM elements in domLinker.js
const { createElements, setParent } = require("../components/dom");
const domLink = require("../components/domLinker")


const getPhotographersMedias = (data) => {
  // turn data into var easy reusable
  const {/* date, id, */ image,video, likes, /* photographerId, price, */ title} = data
  const media = `../src/assets/medias/${image||video}`;
  const mediaAlt = `${title}`;
  const mediaLikes = `${likes}`

  // to display one media 'Card' (media+infos)
  const createMediaCard = () => {
    const mediaContainer = document.createElement("div")
    setParent(mediaContainer, "media__container", null, null)
    domLink.mediasContainer.appendChild(mediaContainer)
    // Logic to inject by media type
    if(image){
      createElements('img', null, "media__itself", mediaAlt, media, mediaAlt, mediaContainer )
    }
    else if(video){
      const newVideo = document.createElement("video")
      setParent(newVideo, "media__itself", mediaAlt, null)
      mediaContainer.appendChild(newVideo)
      createElements('source', null, null, mediaAlt, media, mediaAlt, newVideo, "video/mp4")
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

module.exports = {getPhotographersMedias}