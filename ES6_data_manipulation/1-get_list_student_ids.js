export default function getListStudentIds(list) {
  if (!Array.isArray(list)) {
    return [];
  }

  const idList = list.map((item) => item.id);
  return idList;
}
