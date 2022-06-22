/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable no-console */

const api = require('../components/api');
const factoryPhotographer = require('../factories/photographer');
const { displayModal } = require('../utils/modal');
const factoryMedia = require('../factories/medias');
const domLinker  = require('../components/domLinker');
const lightbox  = require('../utils/lightBox');
let articles = []
let medialikes = []

module.exports = (id) => {
  /**
   * to display each photographer info on his profile
   * @param {object} data to get photographers informations
   */
  const displayHeaderElements = (data) => {
    data.forEach((photographer) => {
      if (location.href.includes(photographer.id)) {
        // header
        const photographerModel = factoryPhotographer.createProfileCard(photographer);
        const headerDOM = photographerModel.getProfileHeaderDOM()
        domLinker.photographHeader.appendChild(headerDOM)
        // contact modal
        const modalTextHeading = `Contactez-moi ${photographerModel.name}`
        domLinker.modalHeading.textContent = modalTextHeading
        // like & Price container
        const pricing = photographerModel.photographerPrice
        domLinker.priceContainer.textContent = pricing
      }
    });
      displayModal().openModal()
      displayModal().closeModal()
  };

  const displayMedias = (data) =>{
    
    
    data.forEach((media)=>{
      const mediaModel = factoryMedia.createMediaCard(media)
      const mediaCardDOM = mediaModel.getMediaCardDOM().card
      const mediaArticleDOM = mediaModel.getArticleDOM().article

      // gallery display 
      domLinker.mediasContainer.appendChild(mediaCardDOM);

      // lightbox display 
        articles.push(mediaArticleDOM)
        mediaCardDOM.firstElementChild.addEventListener('click', () =>{ 
          lightbox.openLightBox(mediaModel);
        })
    })
    
    // lightbox nav
    domLinker.nextLightBoxBtn.addEventListener('click', () => lightbox.nextMedia(articles) )
    domLinker.prevLightBoxBtn.addEventListener('click', () => lightbox.prevMedia(articles) )
    lightbox.closeLightBox()
    


    // likes
    const nbrLikeContainer = document.querySelectorAll('.media__likes')
    console.log(nbrLikeContainer);
    const likeBtn =document.querySelectorAll('.likeIcon')
    
    
    function addLike(){
      likeBtn.forEach((btn)=>{
        btn.addEventListener('click' , (e) => {
          console.log(e.target.id);
          nbrLikeContainer.forEach((container)=>{
            if(e.target.id === container.id){
              console.log(container);
              const articleLike = parseInt(container.innerText)
              container.textContent = articleLike+1;
              let newValueOfLike = parseInt(container.outerText)
              console.log("Nouvelle valeure " + newValueOfLike);
        }
      })
    })
  })
}
addLike()
    
  }
  
  /**
   * To display the total of all media likes
   * @param {object} data to get medias informations
   */
  const displaytotalOfLikes = (data) => {
    const arrayOfLikes = []
    data.forEach((media) => {
        factoryMedia.totalOfLikes(media, arrayOfLikes);
    });
    const likesReduce = arrayOfLikes.reduce((acc,likes)=> acc + likes)
    const totalLikesDom = document.getElementById('totalLikes')
    totalLikesDom.textContent = likesReduce
  };


  /**
   * To get data photographers info in data.json
   * To get each photographer's media from data.json
   * To play the logics filled with datas
   */
   const init = async () => {
    const photographers = await api.getPhotographers();
    const medias = await api.getMediasByPhotographerId(parseInt(id));
    console.log(`id du photographe: ${id}`);
    console.log("Photographes:" , photographers);
    console.log("medias du photographe:", medias)

    displayHeaderElements(photographers);
    displayMedias(medias);
    displaytotalOfLikes(medias);
  };

 init()
 
};