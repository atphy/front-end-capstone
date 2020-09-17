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

export default { getProfileByUid, updateAbout };
