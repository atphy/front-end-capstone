import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getProfileByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/user.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(data.user1, utils.addIdToUser(data)))
    .catch((err) => reject(err));
});

const updateAbout = (userId, updatedUser) => axios.put(`${baseUrl}/user/${userId}.json`, updatedUser);

const deleteMed = (userId, medId) => {
  axios.delete(`${baseUrl}/medicalHistory/${userId}/${medId}.json`);
};

const deleteMedInstance = (instance) => {
  axios.delete(`${baseUrl}/prescriptionInstance/${instance}.json`);
};

export default {
  getProfileByUid, updateAbout, deleteMed, deleteMedInstance,
};
