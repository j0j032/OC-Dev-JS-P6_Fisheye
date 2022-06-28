/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-console */

const { emptyMedias } = require('../components/dom');
const {lightBox,lightBoxContent,} = require('../components/domLinker');
const domLinker = require('../components/domLinker');
const EscKey = 'Escape' || key === 'Esc' || key === 27;
const arrowR = 'ArrowRight' || key === 39;
const arrowL = 'ArrowLeft' || key === 37;

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
 * @param {array} articles
 */
const nextMedia = (articles) => {
  const currentIndex = getCurrentArticleIndex(articles);
  emptyMedias(lightBoxContent);
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
  emptyMedias(lightBoxContent);
  lightBoxContent.appendChild(
    currentIndex === 0
      ? articles[articles.length - 1]
      : articles[currentIndex - 1]
  );
  setVideo()
};

const setKeys = (userKeyPressed, array) => {
  if(lightBox.classList.contains('show')){
    switch (userKeyPressed) {
     case EscKey: closeLightBox()
       break;
     case arrowL: prevMedia(array)
       break;
     case arrowR: nextMedia(array)
       break;
    }
  }
}

const openLightBox = (media ,array) => {
  lightBox.classList.add('show');
  displayLightBoxContent(media)
  getCurrentArticleIndex(array)
  domLinker.photographerPage.setAttribute('aria-hidden', 'true')
  domLinker.lightBox.setAttribute('aria-hidden', 'false')
  domLinker.closeLightBoxBtn.focus()
  document.addEventListener('keydown', e =>{
    const userPress = e.key
    setKeys(userPress, array)
});
};

const closeLightBox = () => {
    lightBox.classList.remove('show');
    emptyMedias(lightBoxContent);
    domLinker.photographerPage.setAttribute('aria-hidden', 'true')
    domLinker.lightBox.setAttribute('aria-hidden', 'false')
    domLinker.photographerPage.focus()
    document.removeEventListener('keydown',setKeys)
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
