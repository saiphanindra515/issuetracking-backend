const mongoose = require('mongoose');
 schema = mongoose.Schema;

 let assigner = new schema({
     IssueId:{
         type:String
     },
     userId:{
         type:String
     },
     userName:{
         type:String
     }
 })
 mongoose.model('assigner',assigner);