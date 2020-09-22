import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getMedByName = (uid, medName) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/medicalHistory/${uid}/${medName}.json`)
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err));
});

const updateMed = (userId, medName, updatedMed) => axios.put(`${baseUrl}/medicalHistory/${userId}/${medName}.json`, updatedMed);

export default { getMedByName, updateMed };
