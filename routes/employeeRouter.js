const express = require("express");
const router = express.Router();
const {
  createEmpCtrl,
  readEmpCtrl,
  updateEmpCtrl,
  deleteEmpCtrl,
  readSingleEmpCtrl,
} = require("../controller/employeeCtrl");

// POST /employees - Create an employee
router.post("/", createEmpCtrl);

// GET /employees - Read all employees
router.get("/", readEmpCtrl);

// PUT /employees/:id - Update an employee
router.put("/:id", updateEmpCtrl);

// DELETE /employees/:id - Delete an employee
router.delete("/:id", deleteEmpCtrl);

// GET /employees/:id - Read a single employee
router.get("/:id", readSingleEmpCtrl);

module.exports = router;
