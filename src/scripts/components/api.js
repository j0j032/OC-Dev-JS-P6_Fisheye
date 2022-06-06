const { default: axios } = require("axios");

const url = "src/data/photographers.json";

/**
 * Get all photographers
 * @returns Array of photographer object
 */
const getPhotographers = () => axios.get(url).then((response) => response.data.photographers);

module.exports = {
  getPhotographers,
};
