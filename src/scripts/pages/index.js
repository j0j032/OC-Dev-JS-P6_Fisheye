/* eslint-disable prettier/prettier */
/* eslint-disable no-console */

const api = require('../components/api');
const { photographersSection } = require('../components/domLinker');
const factory = require('../factories/photographer');

/**
 * to display every photographer cards
 * @param {object} data from data.json
 */
const displayCards = (data) => {
  data.forEach((photographer) => {
    const photographerModel = factory.createProfileCard(photographer);
    const photographerCardDOM = photographerModel.getProfileCardDOM()
    photographersSection.appendChild(photographerCardDOM)
  });
};

/**
 * To get data from data.json put it in an array and play the code.
 */
const init = async () => {
  const photographers = await api.getPhotographers();
  console.log(photographers);
  displayCards(photographers);
};

init();
