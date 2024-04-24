export default function getStudentIdsSum(studentList) {
  const total = studentList.reduce((sum, item) => sum + item.id, 0);

  return total;
}
