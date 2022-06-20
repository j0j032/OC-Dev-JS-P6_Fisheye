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
// const { getLightbox } = require('../utils/lightBox');
const domLinker  = require('../components/domLinker');
const lightbox  = require('../utils/lightBox');
let articles = []


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
      const mediaCardDOM = mediaModel.getMediaCardDOM()
      domLinker.mediasContainer.appendChild(mediaCardDOM);

      // lightbox
      const getLightboxContent = (media) => {
        articles.push(mediaModel.getArticleDOM().article)
        mediaCardDOM.addEventListener('click', () =>{ 
          lightbox.openLightBox();
          lightbox.displayLightBoxContent(media)
        })
      }
      getLightboxContent(mediaModel)
      lightbox.closeLightBox()
    })
    domLinker.nextLightBoxBtn.addEventListener('click', () => lightbox.nextMedia(articles) )
    domLinker.prevLightBoxBtn.addEventListener('click', () => lightbox.prevMedia(articles) )


    const likeBtn =document.querySelectorAll('.media__container--likes')
    
    function addLike(){
      likeBtn.forEach((btn)=>{
        btn .addEventListener('click' , (e) => {
          console.log(e.target);
        })
      })
    }
  addLike()
    console.log(likeBtn);
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
