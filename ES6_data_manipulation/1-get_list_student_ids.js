export default function getListStudentIds(list) {
  if(!Array.isArray(list))
  {
    return new Array();
  }

  const idList = list.map((item) => item.id);
  return idList;


}