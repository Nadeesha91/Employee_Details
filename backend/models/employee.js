const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name :{type : String},
    position : { type: String},
    contact_N0 :  {type : String},
    address :  {type : String},
   
});

module.exports= {Employee};