// Mettre le code JavaScript lié à la page photographer.html

const domLinker = require('../components/domLinker')
const modal = require('../utils/modal')

module.exports = id => {
  domLinker.btnContact.forEach(btn => btn.addEventListener('click', () => modal.displayModal()))
  domLinker.closeModal.addEventListener('click', () => modal.closeModal())
}
