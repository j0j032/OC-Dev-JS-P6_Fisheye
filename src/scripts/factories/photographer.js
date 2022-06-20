/* eslint-disable prettier/prettier */
const { createElement } = require('../components/dom');

module.exports = {
  createProfileCard(data) {
    const { id, name, portrait, city, country, tagline, price } = data;
    const profilePicture = `/src/assets/photographers/${portrait}`;
    const photographerLocation = `${city}, ${country}`;
    const photographerPrice = `${price}€/jour`;

    const cardAttributes = [{ class: 'card' }];
    const cardLinkAttributes = [
      { href: `photographer.html?id=${id}` },
      { 'aria-label': `lien vers la page du photographe ${name}` },
      { class: 'card__link' },
    ];
    const cardImgAttributes = [
      { src: profilePicture },
      { alt: `Portrait de ${name}` },
      { 'aria-label': `Portrait de ${name}` },
      { 'aria-describedby': id },
      { class: 'card__pic' },
    ];
    const cardNameAttributes = [{ class: 'card__name' }];
    const cardLocationAttributes = [
      { class: 'card__location' },
      { 'aria-label': photographerLocation },
    ];
    const cardTaglineAttributes = [
      { class: 'card__tagline' },
      { 'aria-label': tagline },
    ];
    const cardPriceAttributes = [
      { class: 'card__price' },
      { 'aria-label': price },
    ];

    const getProfileCardDOM = () => {
      const card = createElement('div', cardAttributes, null);
      const cardLink = createElement('a', cardLinkAttributes, card);
      createElement('img', cardImgAttributes, cardLink);
      createElement('h2', cardNameAttributes, cardLink, name);
      createElement('p', cardLocationAttributes, card, photographerLocation);
      createElement('p', cardTaglineAttributes, card, tagline);
      createElement('p', cardPriceAttributes, card, photographerPrice);
      return card;
    };

    const photographHeaderAttributes = [{class: 'photograph-header'}];
    const pHDetailsAttributes = [{ class: 'photograph-header__details' }];
    const pHNameAttributes = [{ class: 'name' }];
    const pHBtnAttributes = [{class :'photograph-header__btn btn' }]
    const pHImgContainerAttributes = [{class: 'photograph-header__profilePic-Container'}]

    const getProfileHeaderDOM = () => {
      const photographHeader = createElement('div',photographHeaderAttributes, null )
      const headerDetails = createElement('div', pHDetailsAttributes, photographHeader);
      createElement('h1', pHNameAttributes, headerDetails, name);
      createElement('p', cardLocationAttributes, headerDetails, photographerLocation);
      createElement('p', cardTaglineAttributes, headerDetails, tagline);
      createElement('button',pHBtnAttributes, photographHeader, 'Contactez-moi' )
      const headerImgContainer = createElement('div', pHImgContainerAttributes, photographHeader)
      createElement('img', cardImgAttributes, headerImgContainer);
      return photographHeader;
    };

    return { name, profilePicture, photographerPrice, getProfileCardDOM, getProfileHeaderDOM};
  },
};
