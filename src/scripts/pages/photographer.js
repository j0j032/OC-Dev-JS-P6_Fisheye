/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable no-console */

const api = require('../components/api');
const factoryPhotographer = require('../factories/photographer');
const modal = require('../utils/modal');
const factoryMedia = require('../factories/medias');
const domLinker = require('../components/domLinker');
const lightbox = require('../utils/lightBox');
const dom = require('../components/dom');
const { mediasContainer } = require('../components/domLinker');
let articles = [];


module.exports = (id) => {
  /**
   * to display each photographer info on his profile
   * @param {object} data to get photographers informations
   */
  const displayHeaderElements = (data) => {
    data.forEach((photographer) => {
      if (location.href.includes(photographer.id)) {
        // header
        const photographerModel =
          factoryPhotographer.createProfileCard(photographer);
        const headerDOM = photographerModel.getProfileHeaderDOM();
        domLinker.photographHeader.appendChild(headerDOM);
        // contact modal
        const modalTextHeading = `Contactez-moi ${photographerModel.name}`;
        domLinker.modalHeading.textContent = modalTextHeading;
        // like & Price container
        const pricing = photographerModel.photographerPrice;
        domLinker.priceContainer.textContent = pricing;
      }
    });
  };

  /**
   * to display and sort medias
   * @param {object} data => medias
   */
  const displayMedias = (data) => {
    getMediasDOM(data)

    // reset dom and array of articles for lightbox
    const resetMediasDOM = () =>{
      dom.emptyDOM(mediasContainer)
      articles = []
    }
    
    // logic for sort => errase, sort and create in new order
    const sortMedias = (sortFunction) => {
      resetMediasDOM()
      data.sort(sortFunction)
      getMediasDOM(data)
    }

    domLinker.sortBtn.addEventListener('change', (e) => {
      switch (e.target.value) {
        case 'Popularité':
          sortMedias(dom.byDESCLikes)
          break;

        case 'Date':
          sortMedias(dom.byDESCDate)
          break;
          
        case 'Titre':
          sortMedias(dom.byASCTitle)
          break;
      }
    });
  };

  /**
   * to get medias and articles for lightbox and set the like logic.
   * @param {object} data => medias
   */
  const getMediasDOM = (data) => {

    data.forEach((media) => {
      const mediaModel = factoryMedia.createMediaCard(media);
      const mediaCardDOM = mediaModel.getMediaCardDOM().card;
      const mediaArticleDOM = mediaModel.getArticleDOM().article;
      // gallery display
      domLinker.mediasContainer.appendChild(mediaCardDOM);
      
      // lightbox display
      articles.push(mediaArticleDOM);
      mediaCardDOM.firstElementChild.addEventListener('click', () => {
        lightbox.openLightBox(mediaModel, articles);
      });
    });

    displayUserLike(data)
  };

  // Likes Logic

  const getTotalOfLikes = (arrayOfLikes) => {
    const totalLikesDom = document.getElementById('totalLikes');
    totalLikesDom.textContent = arrayOfLikes.reduce((acc, likes) => acc + likes);
  };

  /**
   * @param {object} data => medias (likes)
   */
  const displayUserLike = (data) => {
    let allIds = [];
    let allLikes = [];

    // set likes by id in arrays
    data.forEach((media) => {
      const mediaModel = factoryMedia.createMediaCard(media);
      allIds.push(mediaModel.id);
      allLikes.push(mediaModel.likes);
    });
    getTotalOfLikes(allLikes);

    const nbrLikeContainer = document.querySelectorAll('.media__likes');
    const likeBtns = document.querySelectorAll('.likeIcon--btn');

    // Logic to add or remove like on each media
    likeBtns.forEach((likeBtn) => {
      let isLiked = false;
      likeBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        const target = e.target.id;
        const result = allIds.indexOf(parseInt(target));

        if (isLiked === false) {
          allLikes[result]++;
          isLiked = true;
        } else {
          allLikes[result]--;
          isLiked = false;
        }
        nbrLikeContainer.forEach((container) => {
          if (target === container.id) {
            container.textContent = allLikes[result];
            if (isLiked === true) {
              container.classList.add('liked');
            } else {
              container.classList.remove('liked');
            }
          }
        });
        getTotalOfLikes(allLikes);
      });
    });
  };

  // get datas and run methods
  // event to open contact modal
  const init = async () => {
    const photographers = await api.getPhotographers();
    const medias = await api.getMediasByPhotographerId(parseInt(id));
    console.log(`id du photographe: ${id}`);
    console.log('medias du photographe:', medias);
    
    displayHeaderElements(photographers);
    displayMedias(medias);
    
    document.querySelector('.photograph-header__btn').addEventListener('click', () => modal.openModal())
  };

  init();
};