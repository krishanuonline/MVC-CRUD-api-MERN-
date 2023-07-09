Create a folder named `utils`, inside this Create a file named `dbConnect.js`
inside dbConnect.js  configure your MongoDB Database

if it's cloud it's look like
->

const mongoose = require("mongoose");
module.exports = mongoose.connect(
    "mongodb+srv://[your user name]:[your password]@mongodb-explore.fsrhkft.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{console.log(`Database Connected`)}).catch((err)=>{console.log(err.message)});

thank you,

feel free to contact 
@ krishanu178@gmail.com