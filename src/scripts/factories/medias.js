const { createElement } = require('../components/dom')

module.exports = {

  /**
   * @param {object} data => medias
   * @returns methods to create DOM
   */
  createMediaCard (data) {
    const { id, image, video, likes, title, date } = data
    const mediaSrc = `../src/assets/medias/${image || video}`

    const mediaAttributes = [
      { src: mediaSrc },
      { class: 'media__itself' },
      { alt: `titre du media : ${title}` },
      { 'aria-label': `${title}` }
    ]

    const videoAttributes = [
      { class: 'media__itself--video' },
      { type: 'video/mp4' }
    ]

    const titleAttributes = [
      { class: 'media__title' },
      { alt: `Titre du média : ${title}` }
    ]

    const likesAttributes = [
      { class: 'media__likes' }, { id },
      { alt: `Nombres de like du média : ${title} = ${likes}` }
    ]

    const heartIconAttributes = [
      { class: 'likeIcon fa-solid fa-heart' }, { id }
    ]

    const infoDivAttributes = [{ class: 'media__container--infos' }]
    const likesDivAttributes = [{ class: 'media__container--likes' }]
    const cardAttributes = [{ class: 'media__card' }]

    const linkAttributes = [
      { href: `#lightbox?id=${id}` },
      { 'aria-label': `ouvre, la vue lightbox de l'image, dont le titre est, ${title}` },
      { alt: `ouvre la vue lightbox de l'image ${title}` }
    ]

    const likeClickAttributes = [
      { class: 'likeIcon--btn' },
      { 'aria-label': 'aimer le media' }
    ]

    const articleAttributes = [
      { id },
      { 'aria-label': `le media en cours de visualisation, est, ${title}` }
    ]

    /**
     * To get content in lightbox
     * @returns lightBox content
     */
    const getArticleDOM = () => {
      const article = createElement('article', articleAttributes, null)
      image
        ? createElement('img', mediaAttributes, article)
        : createElement(
          'video',
          [...videoAttributes, ...mediaAttributes],
          article
        )
      const infosDiv = createElement('div', infoDivAttributes, article)
      createElement('p', titleAttributes, infosDiv, title)

      return { article, infosDiv }
    }

    /**
     * to get each media
     * @returns media cards
     */
    const getMediaCardDOM = () => {
      const card = createElement('div', cardAttributes, null)
      const { article, infosDiv } = getArticleDOM()
      const likesDiv = createElement('div', likesDivAttributes, infosDiv)
      createElement('p', likesAttributes, likesDiv, likes)
      const likeClick = createElement('button', likeClickAttributes, likesDiv)
      createElement('i', heartIconAttributes, likeClick)
      const link = createElement('a', linkAttributes, null)
      link.appendChild(article)
      card.appendChild(link)
      return { card, article }
    }

    return {
      getArticleDOM, getMediaCardDOM, likes, id, title, date
    }
  }
}
