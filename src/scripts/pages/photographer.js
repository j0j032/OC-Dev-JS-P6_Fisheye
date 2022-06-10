/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable no-console */

const api = require('../components/api');
const factory = require('../factories/photographer');
const { openModal, closeModal } = require('../utils/modal');

module.exports = (id) => {
  /**
   * to display each photographer info on his profile
   * @param {object} data from data.json
   */
  const displayHeaderElements = (data) => {
    data.forEach((photographer) => {
      if (location.href.includes(photographer.id)) {
        factory.getPhotographerProfileDetails(photographer);
      }
    });
  };

  const displayMedias = (data) => {
    console.log(`le photographe ${id}`);
    data.forEach((media) => {
      if (parseInt(id) === media.photographerId) {
        factory.getPhotographersMedias(media);
      }
    });
  };

  /**
   * To get data photographers info in data.json, put it in an array and play the code.
   * To get each photographer's media from data.json
   */
  const init = async () => {
    const photographers = await api.getPhotographers();
    const medias = await api.getMedias();

    console.log(photographers);
    console.log(medias);

    displayHeaderElements(photographers);
    displayMedias(medias);
  };

  init();
  openModal();
  closeModal();
};
