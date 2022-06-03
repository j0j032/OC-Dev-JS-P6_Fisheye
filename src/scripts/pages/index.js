const factoryPhotographer = require('../factories/photographer')
const api = require('../components/api')
const { photographersSection } = require('../components/domLinker')

const displayData = photographers => {
  photographers.forEach(photographer => {
    const photographerModel = factoryPhotographer.createCard(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

const init = async () => {
  // Récupère les datas des photographes
  const photographers = await api.getPhotographers()
  displayData(photographers)
}

init()
