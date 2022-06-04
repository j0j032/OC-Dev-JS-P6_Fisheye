const api = require("../components/api");

const init = async () => {
  const photographers = await api.getPhotographers();
  console.log(photographers);
};

init();
