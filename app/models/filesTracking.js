const mongoose = require('mongoose');
const schema = mongoose.Schema;

let FileSchema = new schema({
    issueId:{
        type:String,
        
    },
    originalFileName:{
        type:String
    },
    fileName:{
        type:String
    }
})

mongoose.model('fileSchema',FileSchema);