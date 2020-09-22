import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getInstancesByMed = (instanceID) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/prescriptionInstance/${instanceID}.json`)
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err));
});

export default { getInstancesByMed };