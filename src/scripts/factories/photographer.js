const dom = require('../components/dom')

module.exports = {
  createCard (data) {
    const { id, name, portrait, city, country, tagline, price } = data
    const picture = `/src/assets/photographers/${portrait}`
    const imgAttributes = [
      { src: picture },
      { alt: `Portrait de ${name}` },
      { 'aria-label': `Portrait de ${name}` },
      { 'aria-describedby': id }
    ]
    const spanCityAttributes = [
      { class: 'city' },
      { 'aria-label': `${city}, ${country}` }
    ]
    const spanTaglineAttributes = [
      { id },
      { class: 'tagline' },
      { 'aria-label': tagline }
    ]
    const spanPriceAttributes = [
      { class: 'price' },
      { 'aria-label': price }
    ]
    const aAttributes = [
      { href: `photographer.html?id=${id}` },
      { 'aria-label': `lien vers la page du photographe ${name}` }
    ]

    const getUserCardDOM = () => {
      const a = dom.createElement('a', null, aAttributes)
      const article = dom.createElement('article', a, [{ class: 'flex-center-column' }])
      dom.createElement('img', article, imgAttributes)
      dom.createElement('h2', article, [], name)
      const p = dom.createElement('p', article, [{ class: 'flex-center-column' }])
      dom.createElement('span', p, spanCityAttributes, `${city}, ${country}`)
      dom.createElement('span', p, spanTaglineAttributes, tagline)
      dom.createElement('span', p, spanPriceAttributes, `${price}€ / jour`)
      return a
    }

    return { name, picture, price, getUserCardDOM }
  }
}
