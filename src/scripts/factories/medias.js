/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */

// pattern to create an element in dom.js
// Link to DOM elements in domLinker.js
const { createElements, setParent } = require("../components/dom");


/**
 * create and display medias
 * @param {object} data 
 */
const getMediaCard = (data,parent) => {
  // turn data into var easy reusable
  const {/* date, */ id,  image,video, likes, /* photographerId, price, */ title} = data
  const media = `../src/assets/medias/${image||video}`;
  const mediaAlt = `${title}`;
  const mediaLikes = `${likes}`
  const mediaId = `${id}`

  // to display one media 'Card' (media+infos)

    const mediaContainer = document.createElement("a")
    setParent(mediaContainer, "media__container", null, media, mediaId)
    parent.appendChild(mediaContainer)
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




// Likes logic

/**
 * to get total of likes per photographer
 * @param {object} data to get media informations
 * @param {array} total to stock and additionning all likes 
 */
const totalOfLikes = (data, array) => {
  const {likes, title }= data
  array.push(likes)
  console.log(`${title} = ${likes} likes`); 
  
 }

 /** DOESN'T WORK AT THE MOMENT (bad Logic)
  * 
  * to add a like when user click on media like container
  * @param {object} data to get media informations
  */
 const addLike = (data, array) => {
  const {likes}= data
   const likeClick = document.querySelectorAll('.media__container--likes');
    likeClick.forEach((like)=>{
      like.addEventListener('click', ()=>{
        array.push(likes)
        console.log(array);
      })
    })
 }


module.exports = {getMediaCard, totalOfLikes, addLike}