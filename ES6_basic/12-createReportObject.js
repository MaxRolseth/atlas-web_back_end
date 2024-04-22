export default function createReportObject(employeesList) {
// return all depts and total of depts
  const empReport = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
  return empReport;
}
