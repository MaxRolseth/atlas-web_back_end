export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx of array) {
    newArray[idx] = appendString + idx;
  }

  return newArray;
}
