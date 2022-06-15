const { lightBox, closeLightBoxBtn } = require('../components/domLinker');

const openLightBox = () => {
  const allMedias = document.querySelectorAll('.media__itself');
  allMedias.forEach((media) => {
    media.addEventListener('click', (e) => {
      const clickedId = ` id de la photo clicked = ${e.target.id}`;
      console.log(clickedId);
      lightBox.classList.add('show');
      return clickedId;
    });
  });
};

const closeLightBox = () => {
  closeLightBoxBtn.addEventListener('click', () => {
    lightBox.classList.remove('show');
  });
};

/* const addMediatoLightBox = (data) => {
if

} */

module.exports = {
  openLightBox,
  closeLightBox,
};
