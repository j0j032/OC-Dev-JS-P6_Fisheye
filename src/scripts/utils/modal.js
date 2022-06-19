/* eslint-disable prettier/prettier */
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

const logInputsValue = () => {
  domLinker.modalInputs.forEach(input => {
    input.addEventListener('input',(e)=>{
      console.log(`${e.target.id} = ${e.target.value}`);
    })
  });
  domLinker.contactMessage.addEventListener('input',(e)=>{
    console.log(`${e.target.id} = ${e.target.value}`);
  })
  
};
logInputsValue()

domLinker.contactModal.addEventListener('submit',(e)=>{
  e.preventDefault()
  logInputsValue()
})