const { modal } = require('../components/domLinker')

const displayModal = () => modal.style.display = 'block'
const closeModal = () => modal.style.display = 'none'

module.exports = {
  displayModal,
  closeModal
}