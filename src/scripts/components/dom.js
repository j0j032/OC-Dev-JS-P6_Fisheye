/**
 * Method to insert a 'generic' Element
 * @param {HTMLElement} tag to create html tag
 * @param {string} text to fill text area
 * @param {string} style for css class
 * @param {string} ariaLabel to set aria-label
 * @param {link} src to set the source of img (if img)
 * @param {string} alt to set the alt of img(if img)
 * @param {HTMLElement} parent to insert at the right place
 */
const createElements = (tag, text, style, ariaLabel, src, alt, parent) => {
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
/**
 * To add attributes to a 'parent' element
 * @param {const} parentId to identify a new parent element
 * @param {string} style for css class
 * @param {string} ariaLabel to set aria-label (if necessary)
 * @param {link} link to set link (if the parent is a link)
 */
const setParent = (parentId, style, alabel,link) => {
  // before set create element with parent id
    parentId.classList.add(style);
    parentId.ariaLabel = alabel
    if(link){
      parentId.href = link;
    }
  // after set where parent goes with appendChild
}

module.exports = {
  createElements,
  setParent,
};

