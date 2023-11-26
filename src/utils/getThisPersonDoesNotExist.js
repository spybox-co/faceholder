let timeInMs = Date.now();

const url = `https://this-person-does-not-exist.com`;
const api_url = `${url}`;
const api_query = `/en?new=${timeInMs}`;
const proxy = 'https://23x9k-8080.csb.app/';

const imageObj = () => {
  let Obj;
  return Obj;
};

export const getThisPersonDoesNotExist = async (
  query = api_query,
  assetsAmount = 24
) => {
  let images = [];
  console.info('ThisPersonDoesNotExist:', `${proxy}${api_url}${query}`);
  try {
    for (let i = 0; i < assetsAmount; i++) {
      let response = await fetch(`${proxy}${api_url}${query}`);
      let result = await response.json();

      // Modify @Param 'src' with full path
      result['src'] = result['src'].replace(/^/, url).replace('gen', '');
      result['id'] = result['name']
        .replace('avatar-gen', '')
        .replace('.jpg', '');

      images.push(result);
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
