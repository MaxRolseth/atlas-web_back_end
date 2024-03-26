export default function hasValuesFromArray(set, array) {
  for (let x = 0; x <array.length; ++x) {
    //newSet.add(array[x]);
    if(!set.has(array[x]))
      return false;
  }
  return true;
}