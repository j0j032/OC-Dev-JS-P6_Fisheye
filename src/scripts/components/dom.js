/**
 * Method to insert a card Element
 * @param {HTMLElement} tag to create html tag
 * @param {string} text to fill text area
 * @param {string} attribute for css class
 * @param {HTMLElement} parent to insert at the right place
 */
const createCardElements = (tag, text, attribute, parent) => {
  const element = document.createElement(tag);
  element.classList.add(attribute);
  element.textContent = text;

  parent.appendChild(element);
}

module.exports = {
  createCardElements,
};

 