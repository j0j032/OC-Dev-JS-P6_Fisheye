/* eslint-disable prettier/prettier */
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
const createElements = (tag, text, style, ariaLabel, src, alt, parent , type, style2, id) => {
  const element = document.createElement(tag);
  element.classList.add(style);
  element.textContent = text;
  element.setAttribute('aria-label', ariaLabel)

  if (tag === 'img' || tag === 'source'){
    element.setAttribute('src', src)
    element.setAttribute('alt', alt)
    element.setAttribute('id',id)
  } 
  if(tag === 'source'){
    element.setAttribute('type', type)
  }
  if(tag === 'i'){
    element.classList.add(style2)
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
const setParent = (parentId, style, alabel,link, mediaId) => {
  // before set create element with parent id
  const theParent = parentId
    theParent.classList.add(style);
    theParent.ariaLabel = alabel
    if(link){
      theParent.href = link;
      theParent.id = mediaId;
    }
  // after set where parent goes with appendChild
}

module.exports = {
  createElements,
  setParent,
};