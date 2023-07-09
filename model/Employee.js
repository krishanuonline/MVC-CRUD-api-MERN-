const mongoose = require("mongoose");

// Schema
const employeesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    isOnRole: {
      type: Boolean,
      required: false,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", employeesSchema);

// Export this module
module.exports = Employee;
