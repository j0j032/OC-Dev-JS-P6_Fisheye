const { default: axios } = require("axios");

const url = "src/data/photographers.json";

/**
 * Get all photographers
 * @returns Array of photographer object
 */
const getPhotographers = () => axios.get(url).then((response) => response.data.photographers);

const getMedias = () => axios.get(url).then((response)=> response.data.media)

module.exports = {
  getPhotographers,
  getMedias
};
