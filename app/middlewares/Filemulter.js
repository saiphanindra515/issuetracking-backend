const express = require('express');
const router = express.Router();
const multer = require('multer');
const Path = require('path')
const response = require('./../libs/responseLib')

var store = multer.diskStorage({
    destination:function(req,file,cb){
       cb(null,'./app/uploads');
    },
    filename:function(req,file,cb){
        console.log(file.originalname);
        cb(null,Date.now()+'.'+file.originalname);
    }
})

upload = multer({storage:store}).single('file');

router.post('/upload',function(req,res,next){
    upload(req,res,function(err){
        if(err){
            res.send(err);
        }
        
        return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
    })
})

router.post('/download',function(req,res,next){
    filepath = Path.join(__dirname,'../uploads')+'/'+req.body.filename;
    res.sendFile(filepath);
})

module.exports=router;