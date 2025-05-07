const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log("error connecting to mongodb", err);
})

module.exports = mongoose.connection


















;