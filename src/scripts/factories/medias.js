const { createElement } = require('../components/dom');

module.exports = {
  /**
   * create and display medias
   * @param {object} data
   */

  createMediaCard(data) {
    const { id, image, video, likes, title } = data;
    const mediaLink = `../src/assets/medias/${image || video}`;

    const linkAttributes = [
      { href: mediaLink },
      { 'aria-label': `ouvre en grand l'image ${title}` },
    ];

    const mediaAttributes = [
      // img by default
      { src: mediaLink },
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
      { class: 'media__likes' },
      { 'aria-label': `Nombres de like du média : ${title} = ${likes}` },
    ];

    const heartIconAttributes = [
      { class: 'fa-solid fa-heart' },
      { 'aria-label': `icone clickable pour aimer limage : ${title}` },
    ];

    const infoDivAttributes = [{ class: 'media__container--infos' }];
    const likesDivAttributes = [{ class: 'media__container--likes' }];

    // article = container with id of media that contain media and title
    const getArticleDOM = () => {
      const article = createElement('article', [{ id }], null);
      image
        ? createElement('img', mediaAttributes, article)
        : createElement(
            'video',
            [...videoAttributes, ...mediaAttributes],
            article
          );
      const infoDiv = createElement('div', infoDivAttributes, article);
      createElement('p', titleAttributes, infoDiv, title);
      return { article, infoDiv };
    };

    const getMediaCardDOM = () => {
      const link = createElement('a', linkAttributes, null);
      const { article, infoDiv } = getArticleDOM();
      const likesDiv = createElement('div', likesDivAttributes, infoDiv);
      createElement('p', likesAttributes, likesDiv, likes);
      createElement('i', heartIconAttributes, likesDiv);
      link.appendChild(article);
      return link;
    };
    return { title, mediaLink, getArticleDOM, getMediaCardDOM };
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
