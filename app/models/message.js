const mongoose = require('mongoose');
 schema = mongoose.Schema;

 let savemsg = new schema({
     comment:{
         type:Boolean
     },
     issueId:{
         type:String
     },
     issueName:{
         type:String
     },
     senderName:{
         type:String
     },
     message:{
         type:String
     }
 })

 mongoose.model('savemessage',savemsg);