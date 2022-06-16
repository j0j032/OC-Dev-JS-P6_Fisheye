/* eslint-disable no-console */
const { lightBox, closeLightBoxBtn } = require('../components/domLinker');

/**
 * LightBox logic
 * @param {object} data to get to get media informations
 */
const getLightbox = (data) => {
  const { id } = data;

  const displayLBoxMedia = () => {
    console.log(id);
  };

  // open
  const openLightBox = () => {
    const allMedias = document.querySelectorAll('.media__itself');

    allMedias.forEach((media) => {
      media.addEventListener('click', (e) => {
        const clickedId = e.target.id;
        console.log(clickedId);
        displayLBoxMedia();
        lightBox.classList.add('show');
      });
    });
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
