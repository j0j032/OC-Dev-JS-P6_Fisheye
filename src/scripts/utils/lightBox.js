/* eslint-disable prettier/prettier */
/* eslint-disable no-console */

const { empty } = require('../components/dom');
const {lightBox,closeLightBoxBtn,lightBoxContent,} = require('../components/domLinker');

/**
 * @param {array} articles
 * @returns index of array
 */
const getCurrentArticleIndex = (articles) => {
  const article = lightBoxContent.firstElementChild;
  const result = articles.find((item) => item.id === article.id);
  console.log("Média à l'index: ",articles.indexOf(result),"avec l'id: ",article.id);
  return articles.indexOf(result);
};

/**
 * @param {arrayy} articles
 */
const nextMedia = (articles) => {
  const currentIndex = getCurrentArticleIndex(articles);
  empty(lightBoxContent);
  lightBoxContent.appendChild(
    currentIndex === articles.length - 1
      ? articles[0]
      : articles[currentIndex + 1]
  );
  setVideo()
};

/**
 * @param {array} articles
 */
const prevMedia = (articles) => {
  const currentIndex = getCurrentArticleIndex(articles);
  empty(lightBoxContent);
  lightBoxContent.appendChild(
    currentIndex === 0
      ? articles[articles.length - 1]
      : articles[currentIndex - 1]
  );
  setVideo()
};

const openLightBox = (media ,arrray) => {
  lightBox.classList.add('show');
  displayLightBoxContent(media)
  getCurrentArticleIndex(arrray)
};

const closeLightBox = () => {
  closeLightBoxBtn.addEventListener('click', () => {
    lightBox.classList.remove('show');
    empty(lightBoxContent);
  });
};

/**
 *
 * @param {object} media data from photographers.json
 */
const displayLightBoxContent = (media) => {
  lightBoxContent.appendChild(media.getArticleDOM().article);
  setVideo()
};

const setVideo = () => {
  const video = document.querySelector('div.lightBox__container > article > video')
  if (video){
    video.setAttribute('controls' , 'controls')
  }
}

module.exports = {
  openLightBox,
  closeLightBox,
  nextMedia,
  prevMedia,
};
