import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.openFDAConfig.databaseURL;
const keysFDA = apiKeys.openFDAConfig.apiKey;

const readFDA = (search) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}?api_key=${keysFDA}&search=patient.drug.openfda.generic_name:${search}&count=patient.reaction.reactionmeddrapt.exact&limit=1`)
    .then((response) => {
      const objects = response.data.results;
      const array = [];
      Object.keys(objects).forEach((objectId) => {
        objects[objectId].id = objectId;
        array.push(objects[objectId]);
      });
      resolve(array);
    })
    .catch((err) => reject(err));
});

export default { readFDA };
