const mongoose = require('mongoose');
 schema = mongoose.Schema;

let issueSchemas = new schema({
    issueId:{
        type:String,
        
    },
    recId:{
        type:String,
    },
    issueName:{
        type:String,

    },
    issueDescription:{
        type:String
    },
    issueReporter:{
        type:String
    },
    assignedId:{
        type:String
    },
     id:{
         type:String,
     },
    reporterId:{
       type:String
    },
    status:{
        type:String,
    },
    createdOn:{
        type:Date
    }

})

mongoose.model('issueSchemas',issueSchemas);
