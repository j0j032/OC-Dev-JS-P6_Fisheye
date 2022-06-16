/* eslint-disable no-console */
const { lightBox, closeLightBoxBtn } = require('../components/domLinker');

// lightBox Logic
/**
 * To open and close lightBox
 */
const getLightbox = (data) => {
  // eslint-disable-next-line no-unused-vars
  const { id } = data;
  // open
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
