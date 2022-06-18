/* eslint-disable prefer-const */
/* eslint-disable no-console */
const {
  lightBox,
  closeLightBoxBtn,
  nextLightBoxBtn,
  prevLightBoxBtn,
} = require('../components/domLinker');

const getLightbox = (arrayOfId, arrayOfSrc) => {
  const image = lightBox.querySelector('.lightBox__container img');
  let counter = 0;
  // open
  const openLightBox = () => {
    const allMedias = document.querySelectorAll('.medias__container a');
    for (const link of allMedias) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        image.src = this.href;
        image.id = this.id;

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
    nextLightBoxBtn.addEventListener('click', () => {
      if (arrayOfId.indexOf(parseInt(image.id)) !== -1) {
        counter++;
        if (counter === arrayOfSrc.length) {
          counter = 0;
        }
        image.src = arrayOfSrc[counter];
      }
    });
  };
  nextMedia();

  const prevMedia = () => {
    prevLightBoxBtn.addEventListener('click', () => {
      if (arrayOfId.indexOf(parseInt(image.id)) !== -1) {
        counter--;
        if (counter < 0) {
          counter = arrayOfSrc.length - 1;
        }
        image.src = arrayOfSrc[counter];
      }
    });
  };
  prevMedia();
};

module.exports = {
  getLightbox,
};
