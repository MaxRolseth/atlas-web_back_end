export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const filteredList = studentList.filter((item) => item.location === city);

  for (const obj of newGrades) {
    for (const student of filteredList){
      if(obj.studentId === student.id){
        student.grade = obj.grade;
      }
    }
  }


  return filteredList.map((item) => ({
    id: item.id,
    firstName: item.firstName,
    location: item.location,
    grade: item.grade || 'N/A',
  }));

}