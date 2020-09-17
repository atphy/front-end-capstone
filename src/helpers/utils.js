// will need to rework to be able to fetch other users based on object key

const convertFirebaseCollection = (data) => {
  const objectCollection = data;
  const arrayCollection = [];

  if (objectCollection) {
    Object.keys(objectCollection).forEach((itemId) => {
      objectCollection[itemId].id = itemId;
      arrayCollection.push(objectCollection[itemId]);
    });
  }

  return arrayCollection;
};

const addIdToUser = (data) => {
  const user = data;

  if (user) {
    Object.keys(user).forEach((userId) => {
      user[userId].id = userId;
    });
  }

  return user;
};

export default { convertFirebaseCollection, addIdToUser };
