import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.openFDAConfig.databaseURL;
const keysFDA = apiKeys.openFDAConfig.apiKey;

const readFDA = (search) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}?api_key=${keysFDA}&search=${search}`)
    .then((response) => {
      const objects = response.data.results;
      const array = [];
      Object.keys(objects).forEach((objectId) => {
        objects[objectId].id = objectId;
        array.push(objects[objectId]);
      });
      resolve(console.warn(array));
    })
    .catch((err) => reject(err));
});

export default { readFDA };
