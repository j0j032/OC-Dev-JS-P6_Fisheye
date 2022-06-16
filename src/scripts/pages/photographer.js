/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable no-console */

const api = require('../components/api');
const {getPhotographerProfileDetails} = require('../factories/photographer');
const {getPhotographersMedias, totalOfLikes, addLike} = require('../factories/medias');
const { openModal, closeModal } = require('../utils/modal');
const { getLightbox } = require('../utils/lightBox');


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

  /**
   * to display each photographer medias (by id) on his profile
   * @param {object} data to get medias informations
   */
  const displayMedias = (data) => {
    console.log(`id du photographe: ${id}`);
    data.forEach((media) => {
      if (parseInt(id) === media.photographerId) {
        getPhotographersMedias(media);
      }
    });
  };

  /**
   * To display the total of all media likes
   * @param {object} data to get medias informations
   */
  const displaytotalOfLikes = (data) => {
    const arrayOfLikes = []
    data.forEach((media) => {
        totalOfLikes(media, arrayOfLikes);
    });
    const likesReduce = arrayOfLikes.reduce((acc,likes)=> acc + likes)
    console.log(`total of likes = ${likesReduce}`);
    const totalLikesDom = document.getElementById('totalLikes')
    totalLikesDom.textContent = likesReduce
  };

  /**  DOESN'T WORK AT THE MOMENT (bad Logic)
   * 
   * @param {object} data 
   */
  const displayUserLike = (data) => {
  addLike(data)

  }

  /**
   * To get data photographers info in data.json
   * To get each photographer's media from data.json
   * To play the logics filled with datas
   */
   const init = async () => {
    const photographers = await api.getPhotographers();
    console.log("Photographes:" , photographers);
    const medias = await api.getMediasByPhotographerId(parseInt(id));
    console.log("medias du photographe:", medias)

    displayHeaderElements(photographers);
    displayMedias(medias);
    displaytotalOfLikes(medias);
    displayUserLike(medias);
    getLightbox(medias);
    openModal();
    closeModal();
  };

 init()
 
};
