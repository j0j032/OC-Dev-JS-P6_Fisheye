/* eslint-disable prettier/prettier */
/* eslint-disable no-console */

const domLinker = require('../components/domLinker');

const openModal = () =>{
  domLinker.contactBtn.addEventListener('click', () => {
    domLinker.contactModal.style.display = ('block');
  });
}
const closeModal = () => {
  domLinker.closeModalBtn.addEventListener('click', ()=>{
    domLinker.contactModal.style.display = ('none');
  })
}
module.exports = {
  openModal, closeModal
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