/* eslint-disable no-console */
const { lightBox, closeLightBoxBtn } = require('../components/domLinker');

/**
 * LightBox logic
 * @param {object} data to get to get media informations
 */
const getLightbox = (data) => {
  const { id, image, video } = data;

  // open
  const openLightBox = () => {
    const allMedias = document.querySelectorAll('.medias__container a');
    for (const link of allMedias) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const image = lightBox.querySelector('.lightBox__container img');
        image.src = this.href;

        lightBox.classList.add('show');
      });
    }
  };

  openLightBox();

  // close
  const closeLightBox = () => {
    closeLightBoxBtn.addEventListener('click', () => {
      lightBox.classList.remove('show');
    });
  };
  closeLightBox();
};

module.exports = {
  getLightbox,
};
