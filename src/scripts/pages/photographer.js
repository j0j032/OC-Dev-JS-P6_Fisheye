/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable no-console */

const api = require('../components/api');
const {getPhotographerProfileDetails} = require('../factories/photographer');
const {getPhotographersMedias} = require('../factories/medias');
const { openLightBox, closeLightBox } = require('../utils/lightBox');
const { openModal, closeModal } = require('../utils/modal');

module.exports = (id) => {
  /**
   * to display each photographer info on his profile
   * @param {object} data from data.json
   */
  const displayHeaderElements = (data) => {
    data.forEach((photographer) => {
      if (location.href.includes(photographer.id)) {
        getPhotographerProfileDetails(photographer);
      }
    });
  };

  const displayMedias = (data) => {
    console.log(`id du photographe: ${id}`);
    data.forEach((media) => {
      if (parseInt(id) === media.photographerId) {
        getPhotographersMedias(media);
      }
    });
  };

  /**
   * To get data photographers info in data.json, put it in an array and play the code.
   * To get each photographer's media from data.json
   */
   const init = async () => {
    const photographers = await api.getPhotographers();
    const medias = await api.getMediasByPhotographerId(parseInt(id));
    console.log("medias du photographe:", medias)
    console.log("Photographes:" , photographers);
    // Marche aussi avec mais récupère tous les médias
    /* const medias = await api.getMedias(); */
    /* console.log(medias); */

    displayHeaderElements(photographers);
    displayMedias(medias);
  };

 const runPage = async () => {
  await init();
  openLightBox();
  closeLightBox()
  openModal();
  closeModal();
 }
 runPage()
};
