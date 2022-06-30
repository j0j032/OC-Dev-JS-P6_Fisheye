/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */

/**
 * To create DOM new Element
 * @param {HTMLElement} tag tagName (h1,div,span...)
 * @param {array} attributes set attributes in an array of object: key for attribute type / value for the value of attribute 
 * @param {HTMLElement} parent to attach new element to parrent
 * @param {*} text to set value of text if needed (if text? enter tour text/ if div set to null or '')
 * @returns new element
 */
const createElement = (tag, attributes = [], parent, text) => {
  const element = document.createElement(tag);

  // add attributes to an element
  for (const attribute of attributes) {
    const key = Object.keys(attribute);
    element.setAttribute(key, attribute[key]);
  }

  // to add text to an element
  if (text) {
    element.textContent = text;
  }

  // to add parent to an element
  if (parent) {
    parent.appendChild(element);
  }

  return element;
};


/**
 * Remove all first child from an element quoted in parameter
 * (for lightBox and sort medias)
 * @param {HTMLElement} el - target element html with all first child to remove
 */
 const emptyDOM = el => {
  while (el.firstChild) {
    el.removeChild(el.firstChild)
  }
}

/**
 * Sort medias by title alphabethic order
 * @param {title} a 
 * @param {title} b 
 * @returns order
 */
const byASCTitle = (a, b) => {
  return a.title > b.title ? 1 : -1;
}

/**
 * Sort medias by descendant(more to less) total of likes order 
 * @param {likes} a 
 * @param {likes} b 
 * @returns order
 */
const byDESCLikes = (a,b)=>{
  return b.likes - a.likes;
}

/**
 * Sort medias by date of release (from oldest to newest)
 * @param {date} x 
 * @param {date} y 
 * @returns order
 */
const byDESCDate = (x, y) => { 
  const firstDate = new Date(x.date);
  const SecondDate = new Date(y.date);

  if (firstDate < SecondDate) return -1;
  if (firstDate > SecondDate) return 1;
  return 0;
}


module.exports = {
  createElement, emptyDOM, byASCTitle, byDESCDate, byDESCLikes,
};
