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
 * To remove lightBox media before append next one
 * @param {HTMLElement} element (container)
 */
const empty = (element) => {
  element.lastChild ? element.removeChild(element.lastChild) : console.log('LightBox Empty');
};

module.exports = {
  createElement, empty
};
