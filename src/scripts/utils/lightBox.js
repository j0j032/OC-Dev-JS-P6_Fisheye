const {
  closeLightBoxBtn,
  lightBox,
  allMedias,
  /* clicclic, */
} = require('../components/domLinker');

const closeLightBox = () => {
  closeLightBoxBtn.addEventListener('click', () => {
    lightBox.style.display = 'none';
  });
};

const openLightBox = () => {
  allMedias.forEach((media) => {
    media.addEventListener('click', () => {
      lightBox.style.display = 'flex';
    });
  });
  /*  clicclic.addEventListener('click',()=>{
    lightBox.style.display = ('flex')
  }) */
};

module.exports = {
  closeLightBox,
  openLightBox,
};
