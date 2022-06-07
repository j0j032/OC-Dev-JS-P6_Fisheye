// Mettre le code JavaScript lié à la page photographer.html
const api = require("../components/api");
const factory = require("../factories/photographer");

const displayHeaderElements = (data) => {
data.forEach((photographer) => {
  if(location.href.includes(photographer.id)){
    factory.getPhotographerCard(photographer)
  }
});
}

const init = async () => {
    const medias = await api.getMedias();
    const photographers = await api.getPhotographers();
    console.log(photographers);
    console.log(medias);
    displayHeaderElements(photographers)
  };
  
  init();