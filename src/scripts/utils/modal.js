/* eslint-disable prettier/prettier */

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