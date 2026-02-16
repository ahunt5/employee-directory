import express from "express";
import employees from "#db/employees";
import { getEmployee, getEmployees, getRandomEmployee } from "#db/employees";
const app = express();
export default app;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.send(getEmployees());
});

app.get("/employees/random", (req, res) => {
  res.send(getRandomEmployee());
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const employee = getEmployee(Number(id));

  if (employee === undefined)
    return res.status(404).send("There is no employee with that id number.");

  res.send(employee);
});
