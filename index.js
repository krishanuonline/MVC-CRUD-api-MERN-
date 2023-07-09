require("./utils/dbConnect");
const router = require("./routes/employeeRouter");
const express = require("express");
const app = express();


//middleware
app.use(express.json()) //pass incoming data
    //routes
app.use("/employees",router);


//Express Server rendering
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server running at port number : ${PORT}`);
})