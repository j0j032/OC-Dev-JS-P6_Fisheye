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
};

const openLightBox = () => {
  lightBox.classList.add('show');
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
const displayLightBoxContent = async (media) => {
  lightBoxContent.appendChild(media.getArticleDOM().article);
};

module.exports = {
  openLightBox,
  closeLightBox,
  displayLightBoxContent,
  nextMedia,
  prevMedia,
};
