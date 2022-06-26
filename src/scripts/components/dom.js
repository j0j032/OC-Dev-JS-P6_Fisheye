/* eslint-disable prettier/prettier */

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
 *
 * @param {HTMLElement} el - target element html with all first child to remove
 */
 const emptyMedias = el => {
  while (el.firstChild) {
    el.removeChild(el.firstChild)
  }
}


// sort Methods

const byASCTitle = (a, b) => {
  return a.title > b.title ? 1 : -1;
}

const byDESCLikes = (a,b)=>{
  return b.likes - a.likes;
}

const byDESCDate = (x, y) => { 
  const firstDate = new Date(x.date);
  const SecondDate = new Date(y.date);

  if (firstDate < SecondDate) return -1;
  if (firstDate > SecondDate) return 1;
  return 0;
}

module.exports = {
  createElement, emptyMedias, byASCTitle, byDESCDate, byDESCLikes
};
