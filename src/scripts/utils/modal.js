/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-console */

const domLinker = require('../components/domLinker');
const EscKey = 'Escape' || key === 'Esc' || key === 27;

  const setKeyESC = (user) => {
    if (user === EscKey){
      if(domLinker.contactModal.style.display === 'block'){
        closeModal()
      } 
    }
  }

  const openModal = () =>{
      domLinker.contactModal.style.display = ('block');
      domLinker.photographerPage.setAttribute('aria-hidden', 'true')
      domLinker.contactModal.setAttribute('aria-hidden', 'false')
      domLinker.closeModalBtn.focus()
      
      document.addEventListener('keydown', e =>{
        const userPress = e.key
        setKeyESC(userPress)
    });
  }

  const closeModal = () => {
      domLinker.contactModal.style.display = ('none');
      domLinker.photographerPage.setAttribute('aria-hidden', 'false')
      domLinker.contactModal.setAttribute('aria-hidden', 'true')
      domLinker.photographerPage.focus()
      document.removeEventListener('keydown',setKeyESC)
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
  openModal, closeModal
}