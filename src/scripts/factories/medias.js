/* eslint-disable prettier/prettier */
/* eslint-disable no-constant-condition */
const { createElement } = require('../components/dom');

module.exports = {
  /**
   * create and display medias
   * @param {object} data
   */

  createMediaCard(data) {
    const { id, image, video, likes, title, date } = data;
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

    const linkAttributes = [
      { href: `#lightbox?id=${id}` },
      { 'aria-label': `ouvre la vue lightbox de l'image ${title}` }
    ]

    const likeClickAttributes = [{class: 'likeIcon--btn'}]

    
    const getArticleDOM = () => {
      const article = createElement('article', [{ id }], null);
      image
      ? createElement('img', mediaAttributes, article)
      : createElement(
        'video',
        [...videoAttributes, ...mediaAttributes],
        article
        );
        const infosDiv = createElement('div', infoDivAttributes, article);
        createElement('p', titleAttributes, infosDiv, title);

      return { article, infosDiv };
    };

    const getMediaCardDOM = () => {
      const card = createElement('div', cardAttributes, null);
      const { article , infosDiv } = getArticleDOM();
      const likesDiv = createElement('div', likesDivAttributes, infosDiv);
      createElement('p', likesAttributes, likesDiv, likes );
      const likeClick = createElement('button', likeClickAttributes, likesDiv )
      createElement('i', heartIconAttributes, likeClick);
      const link = createElement('a', linkAttributes, null)
      link.appendChild(article);
      card.appendChild(link);
      return { card, article };
    };

    return {
      getArticleDOM, getMediaCardDOM, likes, id, title, date
    };    
  },
};