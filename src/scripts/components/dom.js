/**
 * Method to insert a card Element
 * @param {HTMLElement} tag to create html tag
 * @param {string} text to fill text area
 * @param {string} style for css class
 * @param {HTMLElement} parent to insert at the right place
 */
const createCardElements = (tag, text, style, ariaLabel, src, alt, parent) => {
  const element = document.createElement(tag);
  element.classList.add(style);
  element.textContent = text;
  element.setAttribute('aria-label', ariaLabel)

  if (tag === 'img'){
    element.setAttribute('src', src)
    element.setAttribute('alt', alt)
  } 

  parent.appendChild(element);

}

const setParent = (parentId, style, alabel,link) => {
    parentId.classList.add(style);
    parentId.ariaLabel = alabel
    if(link){
      parentId.href = link;
    }
}

module.exports = {
  createCardElements,
  setParent,
};

