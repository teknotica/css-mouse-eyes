import { colours } from "../theme";

const getColourIndex = (index) => {
  if (index < colours.length - 1) {
    return index + 1;
  }
  return 0;
};

export default getColourIndex;
