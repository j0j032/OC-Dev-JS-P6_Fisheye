/* eslint-disable prettier/prettier */
module.exports = {
  photographersSection: document.querySelector(".photographer-section"),
  photographHeader: document.querySelector(".photographer"),
  photogHeadDescription :document.querySelector('.photograph-header__description'),
  photogHeadPic :document.querySelector('.photograph-header__profilePic-Container'),
  priceContainer :document.querySelector('.price-container'),
  mediasContainer : document.querySelector('.medias__container'),  

  // modal
  contactModal: document.getElementById('contact_modal'),
  closeModalBtn:document.getElementById('close-modal'),
  modalHeading: document.querySelector('.modal__heading-police'),
  modalInputs:document.querySelectorAll("input[class='contact__input']"),
  contactMessage: document.getElementById('message'),
  
  // lightBox
  closeLightBoxBtn : document.querySelector(".lightBox__close"),
  nextLightBoxBtn : document.querySelector(".lightBox__next"),
  prevLightBoxBtn : document.querySelector(".lightBox__prev"),
  lightBox : document.getElementById('lightBox'),
  lightBoxContent : document.querySelector('.lightBox__container')
};
