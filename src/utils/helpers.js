import axios from 'axios';

export const initialFaceObject = {
  age: null,
  date_added: null,
  filename: null,
  gender: null,
  image_url: null,
  last_served: null,
  source: null
};

export const FindFaces = (amount) => {
  let faces = [];
  amount = Array.from(Array(imageListLenght).keys());

  axios
    .get(`${useProxy}${url}`)
    .then((response) => {
      // console.log(response.data);
      // console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);
      if (typeof response.data === 'object') {
        faces.push(response.data);
      } else {
        faces.push('needReload');
      }
    })
    .catch((err) => console.error(err));

  // const response = await axios.get(`${useProxy}${url}`).catch(error => console.warn(error));

  // if (typeof response.data === "object") {
  //   setSource(response.data);
  // } else {
  //   setSource("needReload");
  // }
  // setSource(response.data);
  return faces;
};

export const UpdateFace = () => {
  // solution
};

export const uf = (string) => {
  if (string !== undefined)
    return string[0].toUpperCase() + string.substring(1);
};
