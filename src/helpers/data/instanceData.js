import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getInstancesByMed = (instanceID) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/prescriptionInstance/${instanceID}.json`)
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err));
});

const createInstance = (newInstance) => axios.post(`${baseUrl}/prescriptionInstance.json`, newInstance);

const deleteInstance = (instance) => {
  axios.delete(`${baseUrl}/prescriptionInstance/${instance}.json`);
};

export default { getInstancesByMed, createInstance, deleteInstance };
