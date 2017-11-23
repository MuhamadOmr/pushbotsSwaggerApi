var mongoose = require("mongoose");

var appSchema = mongoose.Schema({
   title:{
       type: String
   } ,
    secret:{
       type: String
    },


});

var App = mongoose.model("App",appSchema);

module.exports ={App: App};