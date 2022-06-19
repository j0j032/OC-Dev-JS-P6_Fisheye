/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable no-console */

const api = require('../components/api');
const {getPhotographerProfileDetails} = require('../factories/photographer');
const { openModal, closeModal } = require('../utils/modal');
const factoryMedia = require('../factories/medias2')
// const { getLightbox } = require('../utils/lightBox');
const { mediasContainer } = require('../components/domLinker');


module.exports = (id) => {
  /**
   * to display each photographer info on his profile
   * @param {object} data to get photographers informations
   */
  const displayHeaderElements = (data) => {
    data.forEach((photographer) => {
      if (location.href.includes(photographer.id)) {
        getPhotographerProfileDetails(photographer);
      }
    });
  };

  const displayMedias = (data) =>{
    

    data.forEach((media)=>{
      const mediaModel = factoryMedia.createMediaCard(media)
      const mediaCardDOM = mediaModel.getMediaCardDOM()
      mediasContainer.appendChild(mediaCardDOM);
    })
  }

  /**
   * To display the total of all media likes
   * @param {object} data to get medias informations
   */
  const displaytotalOfLikes = (data) => {
    const arrayOfLikes = []
    data.forEach((media) => {
        factoryMedia.totalOfLikes(media, arrayOfLikes);
    });
    const likesReduce = arrayOfLikes.reduce((acc,likes)=> acc + likes)
    const totalLikesDom = document.getElementById('totalLikes')
    totalLikesDom.textContent = likesReduce
  };


  /**
   * To get data photographers info in data.json
   * To get each photographer's media from data.json
   * To play the logics filled with datas
   */
   const init = async () => {
    const photographers = await api.getPhotographers();
    const medias = await api.getMediasByPhotographerId(parseInt(id));
    console.log(`id du photographe: ${id}`);
    console.log("Photographes:" , photographers);
    console.log("medias du photographe:", medias)

    displayHeaderElements(photographers);
    displayMedias(medias);
    displaytotalOfLikes(medias);
    openModal();
    closeModal();
  };

 init()
 
};
