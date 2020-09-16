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

export default { convertFirebaseCollection };
