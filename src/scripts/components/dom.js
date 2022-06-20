/* eslint-disable prettier/prettier */
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

module.exports = {
  createElement,
};
