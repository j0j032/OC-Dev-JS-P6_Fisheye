/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */

// pattern to create an element in dom.js
// Link to DOM elements in domLinker.js
const { createElements, setParent } = require("../components/dom");
const { lightBox, closeLightBoxBtn} = require('../components/domLinker');
const domLink = require("../components/domLinker");



const getPhotographersMedias = (data) => {
  // turn data into var easy reusable
  const {/* date, */ id,  image,video, likes, /* photographerId, price, */ title} = data
  const media = `../src/assets/medias/${image||video}`;
  const mediaAlt = `${title}`;
  const mediaLikes = `${likes}`
  const mediaId = `${id}`

  // to display one media 'Card' (media+infos)
  const createMediaCard = () => {
    const mediaContainer = document.createElement("div")
    setParent(mediaContainer, "media__container", null, null)
    domLink.mediasContainer.appendChild(mediaContainer)
    // Logic to inject by media type
    if(image){
      createElements('img', null, "media__itself", mediaAlt, media, mediaAlt, mediaContainer, null,null, mediaId )
    }
    else if(video){
      const newVideo = document.createElement("video")
      setParent(newVideo, "media__itself", mediaAlt, null)
      mediaContainer.appendChild(newVideo)
      createElements('source', null, null, mediaAlt, media, mediaAlt, newVideo, "video/mp4",null, mediaId)
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

// lightBox Logic

  const displayMediaInLightBox = () => {
    
    
    const openLightBox = () => {

      const allMedias = document.querySelectorAll('.media__itself');

      allMedias.forEach((media) => {

        media.addEventListener('click', (e) => {
         const clickedId = e.target.id;
          console.log(clickedId);
          lightBox.classList.add('show');

        
        });
      });
    };
    openLightBox()

    
    const closeLightBox = () => {
      closeLightBoxBtn.addEventListener('click', () => {
        lightBox.classList.remove('show');
      });
    }
    closeLightBox()  
  }
  displayMediaInLightBox()

  
}

// Likes logic

const totalOfLikes = (data, unArray) => {
  const {likes, title }=data
  
  unArray.push(likes)
  console.log(`${title} = ${likes} likes`); 
 }


module.exports = {getPhotographersMedias, totalOfLikes}
