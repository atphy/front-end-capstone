import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getProfileByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/user.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(data.user1))
    .catch((err) => reject(err));
});

const updateUser = (userId, updatedUser) => axios.put(`${baseUrl}/user/${userId}.json`, updatedUser);

export default { getProfileByUid, updateUser };
