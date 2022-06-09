// Mettre le code JavaScript lié à la page photographer.html
const api = require("../components/api");
const { imgContainer } = require("../components/domLinker");
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

const displayMedias = (mediaData, artistData) => {
const urlId = location.href.split("http://localhost:8087/photographer.html?id=")
console.log(urlId[1]);
  mediaData.forEach((media)=>{
    if(parseInt(urlId[1]) === media.photographerId){
      console.log(`${media.title} match url`);
     /*  const element = document.createElement("h2")
      element.textContent = `titre: ${media.title}`

      imgContainer.appendChild(element) */
      factory.getPhotographersMedias(media, artistData)
    }
  })
}

/**
 * To get data photographers info in data.json, put it in an array and play the code.
 * To get each photographer's media from data.json
 */
const init = async () => {
    const photographers = await api.getPhotographers();
    const medias = await api.getMedias();

    console.log(photographers);
    console.log(medias);

    displayHeaderElements(photographers)
    displayMedias(medias, photographers)
  };
  
  init();

  
