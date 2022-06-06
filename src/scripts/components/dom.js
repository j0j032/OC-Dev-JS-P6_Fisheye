const createCardElements = (tag, text, attribute, parent) => {
  const element = document.createElement(tag);
  element.classList.add(attribute);
  element.textContent = text;

  parent.appendChild(element);
}

module.exports = {
  createCardElements,
};

 