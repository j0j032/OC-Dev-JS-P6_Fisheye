/* eslint-disable no-console */
const { closeLightBoxBtn, lightBox } = require('../components/domLinker');

const closeLightBox = () => {
  closeLightBoxBtn.addEventListener('click', () => {
    lightBox.style.display = 'none';
  });
};

const openLightBox = () => {
  const allMedias = document.querySelectorAll('.media__itself');
  console.log(allMedias);
  allMedias.forEach((media) => {
    media.addEventListener('click', () => {
      lightBox.style.display = 'flex';
    });
  });
};

module.exports = {
  closeLightBox,
  openLightBox,
};
