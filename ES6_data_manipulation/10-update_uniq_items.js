export default function updateUniqueItems(map) {
  if(!map instanceof Map)
    throw Error('Cannot process');
  for(const [name, value] of map) {
    if(value === 1)
      map.set(name, 100);
  }
  return map;
}