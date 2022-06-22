/* eslint-disable prettier/prettier */
/* eslint-disable no-constant-condition */
const { createElement } = require('../components/dom');

module.exports = {
  /**
   * create and display medias
   * @param {object} data
   */

  createMediaCard(data) {
    const { id, image, video, likes, title } = data;
    const mediaSrc = `../src/assets/medias/${image || video}`;

    const mediaAttributes = [
      { src: mediaSrc },
      { class: 'media__itself' },
      { alt: `titre du media : ${title}` },
      { 'aria-label': `ouvre en grand le media : ${title}` },
    ];

    const videoAttributes = [
      { class: 'media__itself--video' },
      { type: 'video/mp4' },
    ];

    const titleAttributes = [
      { class: 'media__title' },
      { 'aria-label': `Titre du média : ${title}` },
    ];

    const likesAttributes = [
      { class: 'media__likes' },{id},
      { 'aria-label': `Nombres de like du média : ${title} = ${likes}` },
    ];

    const heartIconAttributes = [
      { class: 'likeIcon fa-solid fa-heart' },{id},
      { 'aria-label': `icone clickable pour aimer limage : ${title}` },
    ];

    const infoDivAttributes = [{ class: 'media__container--infos' }];
    const likesDivAttributes = [{ class: 'media__container--likes' }];
    const cardAttributes = [{ class: 'media__card' }];

    const mediaTitle = createElement('p', titleAttributes, null, title);

    const getArticleDOM = (lightBox = false) => {
      const article = createElement('article', [{ id }], null);
      image
        ? createElement('img', mediaAttributes, article)
        : createElement(
            'video',
            [...videoAttributes, ...mediaAttributes],
            article
          );
      if ((lightBox = true)) {
        article.appendChild(mediaTitle);
      }
      return { article };
    };

    const getMediaCardDOM = () => {
      const card = createElement('div', cardAttributes, null);
      const { article } = getArticleDOM();
      const infosDiv = createElement('div', infoDivAttributes, null);
      createElement('p', titleAttributes, infosDiv, title);
      const likesDiv = createElement('div', likesDivAttributes, infosDiv);
      createElement('p', likesAttributes, likesDiv, likes );
      createElement('i', heartIconAttributes, likesDiv);
      card.appendChild(article);
      card.appendChild(infosDiv);
      return { card, article, infosDiv };
    };

    const addLike = () => {
      console.log(likes);
    };


    return {
      getArticleDOM, getMediaCardDOM, addLike, mediaTitle, likes, id
    };    
  },



  /**
   * to get total of likes per photographer
   * @param {object} data to get media informations
   * @param {array} total to stock and additionning all likes
   */
  totalOfLikes(data, array) {
    const { likes } = data;
    array.push(likes);
  },
};
