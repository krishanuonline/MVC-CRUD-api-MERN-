const Employee = require("../model/Employee");

//Create Employee
const createEmpCtrl = async (req, res) => {
    const { name, city, isOnRole, salary } = req.body;
    try {
      const employee = await Employee.create({
        name,
        city,
        isOnRole,
        salary,
      });
      res.json({
        status: "success",
        data: employee,
      });
    } catch (error) {
      res.json({ error: error.message });
    }
  };
  
//Read all Employee
const readEmpCtrl = async(req,res)=>{
    const employees = await Employee.find();
    try {
        res.json({
            status:"success",
            data:employees,
        });
    } catch (error) {
        res.json(error);
    }
};
//Update Employee
const updateEmpCtrl = async (req, res) => {
    try {
      const updatedEmp = await Employee.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          city: req.body.city,
          isOnRole: req.body.isOnRole,
          salary: req.body.salary,
        },
        {
          new: true,
          runValidators: true,
        }
      );
      res.json({
        status: "success",
        data: updatedEmp,
      });
    } catch (error) {
      res.json({ error: error.message });
    }
  };
  
//Delete Employee
const deleteEmpCtrl = async(req,res)=>{
    try {
        await Employee.findOneAndDelete(req.params.id);
        res.json({
            status:"success",
            data:"Employee hasbeen Deleted successfully",
        });
    } catch (error) {
        res.json(error);
    }
};
//Read single Employee
const readSingleEmpCtrl = async(req,res)=>{
    try {
        res.json({
            status:"success",
            data:"Fetch single Employee",
        });
    } catch (error) {
        res.json(error);
    }
};



module.exports = {
    createEmpCtrl,
    readEmpCtrl,
    updateEmpCtrl,
    deleteEmpCtrl,
    readSingleEmpCtrl
};