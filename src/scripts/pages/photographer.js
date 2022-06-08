// Mettre le code JavaScript lié à la page photographer.html
const api = require("../components/api");
const factory = require("../factories/photographer");

/**
 * to display each photographer info on his profile
 * @param {object} data from data.json
 */
const displayHeaderElements = (data) => {
data.forEach((photographer) => {
  if(location.href.includes(photographer.id)){
    factory.getPhotographerProfileDetails(photographer)
  }
});
}
/**
 * To get data photographers info in data.json, put it in an array and play the code.
 * To get each photographer's media from data.json
 */
const init = async () => {
    const medias = await api.getMedias();
    const photographers = await api.getPhotographers();
    console.log(photographers);
    console.log(medias);
    displayHeaderElements(photographers)
  };
  
  init();