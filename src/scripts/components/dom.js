/* eslint-disable prettier/prettier */

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