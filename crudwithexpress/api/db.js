const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CrudDB',(err)=>{
    if(!err)
        console.log("mongodb connection succeded 11");
    else
        console.log("error in db connection 1 :" + JSON.stringify(err,undefined,2));
});
module.exports = mongoose;