const displayLightBox = (data) => {
  console.log('lightbox', data);

  /* for (let i = 0; i < data.length; i++) {
    const PhotographerMedia = {
      order: i,
      title: data[i].title,
      nbrLikes: data[i].likes,
      media: `../src/assets/medias/${data[i].image || data[i].video}`,
    };
    console.log(PhotographerMedia);
  } */
};

module.exports = {
  displayLightBox,
};
