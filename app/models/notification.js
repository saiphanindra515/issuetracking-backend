const mongoose = require('mongoose');
schema = mongoose.Schema;

let notification = new schema({
    issueName:{
        type:String
    },
    issueId:{
        type:String
    },
    senderName:{
        type:String
    },
    message:{
        type:String
    }
})

mongoose.model('notificationSchema',notification);