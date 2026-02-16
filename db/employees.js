const employees = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

export default employees;

export function getEmployee(passedID) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === passedID) return employees[i];
  }
}

export function getEmployees() {
  return employees;
}

export function getRandomEmployee() {
  const random = Math.floor(Math.random() * employees.length);
  return employees[random];
}
