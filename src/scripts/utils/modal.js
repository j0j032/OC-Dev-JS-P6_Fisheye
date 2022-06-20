/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-console */

const domLinker = require('../components/domLinker');

const displayModal = () => {

  const openModal = () =>{
    const contactBtn = document.querySelector('.photograph-header__btn');
    contactBtn.addEventListener('click', () => {
      domLinker.contactModal.style.display = ('block');
    });
  }
  const closeModal = () => {
    domLinker.closeModalBtn.addEventListener('click', ()=>{
      domLinker.contactModal.style.display = ('none');
    })
  }
  return {openModal, closeModal}
}

module.exports = {
  displayModal
}

domLinker.contactModal.addEventListener('submit',(e)=>{
  e.preventDefault()
  console.log(
    'Données du formulaire: ',
    `Prénom = ${first.value} / `,
    `Nom = ${last.value} / `,
    `Email = ${email.value} / `,
    `Message = ${message.value}`,
    );

})