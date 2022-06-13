/* eslint-disable prettier/prettier */
module.exports = {
  photographersSection: document.querySelector(".photographer-section"),
  photographHeader: document.querySelector(".photograph-header"),
  photogHeadDescription :document.querySelector('.photograph-header__description'),
  photogHeadPic :document.querySelector('.photograph-header__profilePic-Container'),
  priceContainer :document.querySelector('.totalLikes-container'),
  mediasContainer : document.querySelector('.medias__container'),
  // modal
  contactBtn: document.querySelector('.photograph-header__btn'),
  contactModal: document.getElementById('contact_modal'),
  closeModalBtn:document.getElementById('close-modal'),
  modalHeader: document.querySelector('.modal__heading'),
  modalInputs:document.querySelectorAll("input[class='contact__input']"),
  contactMessage: document.getElementById('message'),
  // lightBox
  closeLightBoxBtn : document.querySelector(".lightBox__close"),
  nextLightBoxBtn : document.querySelector(".lightBox__next"),
  prevLightBoxBtn : document.querySelector(".lightBox__prev"),
  lightBox : document.getElementById('lightBox'),
  // clicclic : document.querySelector('.medias__container')
};
