/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-console */

const domLinker = require('../components/domLinker');


const displayModal = () => {

  const openModal = () =>{
    const contactBtn = document.querySelector('.photograph-header__btn');
    contactBtn.addEventListener('click', () => {
      domLinker.contactModal.style.display = ('block');
      domLinker.photographerPage.setAttribute('aria-hidden', 'true')
      domLinker.contactModal.setAttribute('aria-hidden', 'false')
      domLinker.closeModalBtn.focus()
    });
  }
  const closeModal = () => {
    domLinker.closeModalBtn.addEventListener('click', ()=>{
      domLinker.contactModal.style.display = ('none');
      domLinker.photographerPage.setAttribute('aria-hidden', 'false')
      domLinker.contactModal.setAttribute('aria-hidden', 'true')
      domLinker.photographerPage.focus()
    })
  }
  return {openModal, closeModal}
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

module.exports = {
  displayModal
}