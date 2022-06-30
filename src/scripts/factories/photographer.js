const { createElement } = require('../components/dom')

module.exports = {

  /**
   * @param {object} data => photographers
   * @returns methods to create photographer card on home page and header on photographer page
   */
  createProfileCard (data) {
    const { id, name, portrait, city, country, tagline, price } = data
    const profilePicture = `/src/assets/photographers/${portrait}`
    const photographerLocation = `${city}, ${country}`
    const photographerPrice = `${price}€/jour`

    const cardAttributes = [{ class: 'card' }]
    const cardLinkAttributes = [
      { href: `photographer.html?id=${id}` },
      { 'aria-label': `lien vers la page du photographe ${name}` },
      { alt: `lien vers la page du photographe ${name}` },
      { class: 'card__link' }
    ]
    const cardImgAttributes = [
      { src: profilePicture },
      { alt: `Portrait de ${name}` },
      { 'aria-label': `Portrait de ${name}` },
      { class: 'card__pic' }
    ]
    const cardNameAttributes = [{ class: 'card__name' }, { 'aria-label': name }]
    const cardLocationAttributes = [
      { class: 'card__location' },
      { alt: photographerLocation }
    ]
    const cardTaglineAttributes = [
      { class: 'card__tagline' },
      { alt: tagline }
    ]
    const cardPriceAttributes = [
      { class: 'card__price' },
      { alt: price }
    ]

    /**
     * Create home page DOM
     * @returns photographer card
     */
    const getProfileCardDOM = () => {
      const card = createElement('div', cardAttributes, null)
      const cardLink = createElement('a', cardLinkAttributes, card)
      createElement('img', cardImgAttributes, cardLink)
      createElement('h2', cardNameAttributes, cardLink, name)
      createElement('p', cardLocationAttributes, card, photographerLocation)
      createElement('p', cardTaglineAttributes, card, tagline)
      createElement('p', cardPriceAttributes, card, photographerPrice)
      return card
    }

    // pH = photographer header
    const pHAttributes = [{ class: 'photograph-header' }]
    const pHDetailsAttributes = [{ class: 'photograph-header__details' }]
    const pHNameAttributes = [{ class: 'name' }]
    const pHBtnAttributes = [{ class: 'photograph-header__btn btn' }]
    const pHImgContainerAttributes = [{ class: 'photograph-header__profilePic-Container' }]

    /**
     * Create header photographer DOM
     * @returns photographer header
     */
    const getProfileHeaderDOM = () => {
      const photographHeader = createElement('div', pHAttributes, null)
      const headerDetails = createElement('div', pHDetailsAttributes, photographHeader)
      createElement('h1', pHNameAttributes, headerDetails, name)
      createElement('p', cardLocationAttributes, headerDetails, photographerLocation)
      createElement('p', cardTaglineAttributes, headerDetails, tagline)
      createElement('button', pHBtnAttributes, photographHeader, 'Contactez-moi')
      const headerImgContainer = createElement('div', pHImgContainerAttributes, photographHeader)
      createElement('img', cardImgAttributes, headerImgContainer)
      return photographHeader
    }

    return { name, profilePicture, photographerPrice, getProfileCardDOM, getProfileHeaderDOM }
  }
}
