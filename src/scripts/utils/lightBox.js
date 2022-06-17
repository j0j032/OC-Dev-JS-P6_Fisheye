/* eslint-disable no-console */
const {
  lightBox,
  closeLightBoxBtn,
  nextLightBoxBtn,
} = require('../components/domLinker');

const getLightbox = (arrayOfSrc) => {
  const image = lightBox.querySelector('.lightBox__container img');
  // open

  const openLightBox = () => {
    const allMedias = document.querySelectorAll('.medias__container a');
    for (const link of allMedias) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        image.src = this.href;

        image.id = this.id;
        console.log(image.id);

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

  const nextMedia = () => {
    /* nextLightBoxBtn.addEventListener('click', (e) => {
      const source = image.src.split('http://localhost:8087');
      if (arrayOfSrc.indexOf(`..${source[1]}`) === -1) {
        console.log('pas trouvé');
        console.log(`..${source[1]}`);
      } else {
        console.log('trouvé');
        image.src = arrayOfSrc[2];
      }
    }); */
    nextLightBoxBtn.addEventListener('click', (e) => {
      const source = image.src.slice(image.src);
      if (arrayOfSrc.indexOf(source) === -1) {
        console.log('pas trouvé');
        console.log(source);
      } else {
        console.log('trouvé');
        image.src = arrayOfSrc[2];
      }
    });
  };
  nextMedia();
};

module.exports = {
  getLightbox,
};
