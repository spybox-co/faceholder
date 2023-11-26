// https://100k-faces.glitch.me/random-image-url
// https://100k-faces.glitch.me

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const strPad = (str) => {
  return '000'.slice(str.toString().length) + str;
};

const randomImageUrl = () => {
  const baseUrl = 'https://ozgrozer.github.io/100k-faces/';
  const firstFolder = '0';
  const secondFolder = randomInt(0, 9);
  const randomFile = strPad(randomInt(0, 999));
  const filename = `00${secondFolder}${randomFile}`;
  const id = `${firstFolder}_${secondFolder}_${filename}`;
  const fullUrl = `${baseUrl}${firstFolder}/${secondFolder}/${filename}.jpg`;
  const result = {
    url: fullUrl,
    id: id,
    name: `${secondFolder}${filename}`
  };
  return result;
};

export const getFacesFromGlitch = async (assetsAmount = 24) => {
  let images = [];

  try {
    for (let i = 0; i < assetsAmount; i++) {
      let result = randomImageUrl();
      images.push(result);
      // console.log(result);
    }

    if (!images) {
      // Danger state here
      return {
        notFound: true
      };
    }

    return images;
  } catch (error) {
    console.error('runtime error: ', error);
  }
};
