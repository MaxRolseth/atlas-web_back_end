export default function getStudentsByLocation(list, city) {
  const filteredList = list.filter((item) => item.location === city);

  return filteredList;
}
