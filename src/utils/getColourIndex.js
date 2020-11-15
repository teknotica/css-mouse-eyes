const getRandomIndex = (arrayLength) => Math.floor(Math.random() * arrayLength);

const getColourIndex = (currentIndex, arrayLength) => {
  const newIndex = getRandomIndex(arrayLength);

  while (currentIndex === newIndex) {
    getColourIndex(newIndex, arrayLength);
  }
  return newIndex;
};

export default getColourIndex;
