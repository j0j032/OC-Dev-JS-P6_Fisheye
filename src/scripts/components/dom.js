/**
 * Create an HTMLElement including possibility to set attributes, add a textNode and also append it to a parent
 *
 * @param {HTMLElement} tagName Tag to create
 * @param {HTMLElement} parent Append the new element to this parent
 * @param {Array} attributes Set attribute in function of an array of object, ex: [{'class': 'nameOfClass'}]
 * @param {String} text Add textNode to this new element
 * @returns New HTMLElement created
 */
const createElement = (tagName, parent, attributes = [], text) => {
  const element = document.createElement(tagName);

  // add attributes to element
  for (const attribute of attributes) {
    const key = Object.keys(attribute);
    element.setAttribute(key, attribute[key]);
  }

  if (text) {
    element.textContent = text;
  }

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
const empty = (el) => {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

/**
 * Toggle between 2 classes attached to an element
 *
 * @param {HTMLElement} el
 * @param {String} classToRemove
 * @param {String} classToAdd
 */
const toggleClass = (el, classToRemove, classToAdd) => {
  console.log(el);
  if (el.classList.contains(classToRemove)) {
    el.classList.remove(classToRemove);
  }
  if (!el.classList.contains(classToAdd)) {
    el.classList.add(classToAdd);
  }
};

module.exports = {
  createElement,
  empty,
  toggleClass,
};
