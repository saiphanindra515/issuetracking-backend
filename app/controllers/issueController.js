const shortid = require('shortid');
const mongoose = require('mongoose');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const passwordLib = require('../libs/passwordhash')
const tokenlib = require('../libs/TokenLib')
/* Models */
const UserModel = mongoose.model('User')
const issueModel = mongoose.model('issueSchemas');
const fileschema = mongoose.model('fileSchema');
const comment = mongoose.model('savemessage');
const assigners = mongoose.model('assigner');
//file storage..
let createFile = (req,res)=>{
    let newFile = new fileschema({
        issueId:req.body.issueId,
        originalFileName:req.body.orgfilename,
        fileName:req.body.fileName
    })
    newFile.save((err,result)=>{
        if(err){
            logger.error(err,"error at saving new file",10);
            let apiresponse=response.generate(err,"sorry file not created,error at data base",null);
            res.send(apiresponse);
        }else{
            let apiresponse = response.generate(null,"file created",200,newIssue);
            res.send(apiresponse);
        }
    })
}

// controller for creating new issue 
let createIssue = (req,res)=>{
    let newIssue = new issueModel({
        issueId:shortid.generate(),
        
        issueName:req.body.issueName,
        issueDescription:req.body.issueDescription,
        issueReporter:req.body.issueReporter,
        assignedId:req.body.assignedId,
        reporterId:req.body.reporterId,
        id:req.body.reporterId,
        status:req.body.status,
        createdOn:time.now()
    })
    newIssue.save((err,result)=>{
        if(err){
            logger.error(err,"error at saving new issue",10);
            let apiresponse=response.generate(err,"sorry issue is not created,error at data base",null);
            res.send(apiresponse);
        }else{
            let apiresponse = response.generate(null,"Issue created",200,newIssue);
            res.send(apiresponse);
        }
    })
}// end of creating issue

//detailed description about issue
let findissue = (req,res)=>{
    issueModel.find({issueId:req.body.IssueId},(err,result)=>{
        if(err){
            logger.error(err,"error at retrieving issue : "+req.body.issueId,10);
            let apiresponse=response.generate(err,"sorry issue is not retrieved",null);
            res.send(apiresponse);
        }
        else if(check.isEmpty(result)){
            logger.error("no issue found","issues not found in find issue method",3);
            let apiresponse=response.generate(null,"user not found",404,null);
            res.send(apiresponse);
        }else{
            let apiresponse=response.generate(null,"issues",400,result);
            res.send(apiresponse);
        }
    })
}
//remove all
let removeIssue = (req,res)=>{
    let remove1=()=>{
        return new Promise((resolve,reject)=>{
    issueModel.remove({issueId:req.body.issueId},(err,result)=>{
        if(err){
            logger.error(err,"error at retrieving issue : "+req.body.issueId,10);
            let apiresponse=response.generate(err,"sorry issue is not retrieved",null);
            reject(apiresponse)
        }
        else if(check.isEmpty(result)){
            logger.error("no issue found","issues not found in find issue method",3);
            let apiresponse=response.generate(null,"user not found",404,null);
            resolve(apiresponse)
        }else{
            let apiresponse=response.generate(null,"issues",400,result);
            resolve();
        }
    })
})
}//end
let remove2=()=>{
    return new Promise((resolve,reject)=>{
issueModel.remove({recId:req.body.issueId},(err,result)=>{
    if(err){
        logger.error(err,"error at retrieving issue : "+req.body.issueId,10);
        let apiresponse=response.generate(err,"sorry issue is not retrieved",null);
        reject(apiresponse)
    }
    else if(check.isEmpty(result)){
        logger.error("no issue found","issues not found in find issue method",3);
        let apiresponse=response.generate(null,"user not found",404,null);
        resolve(apiresponse)
    }else{
        let apiresponse=response.generate(null,"issues deleted",400,result);
        resolve(apiresponse);
    }
})
})
}//end

remove1(req,res)
.then(remove2)
.then((resolve)=>{
    res.send(resolve);
})
.catch((err)=>{
   res.send(err); 
})
}

//gives issues of single user
let myissue =(req,res)=>{
    issueModel.find({id:req.query.reporterId }).skip(parseInt(req.query.skip)).limit(10)
    .exec((err,result)=>{
        if(err){
            logger.error(err,"error at retrieving issue : "+req.body.issueId,10);
            let apiresponse=response.generate(err,"sorry issue is not retrieved",null);
            res.send(apiresponse);
        }
        else if(check.isEmpty(result)){
            logger.error("no issue found","issues not found in find issue method",3);
            let apiresponse=response.generate(null,"user not found",404,null);
            res.send(apiresponse);
        }else{
            let apiresponse=response.generate(null,"issues",400,result);
            res.send(apiresponse);
        }
    })
}
let issuesForSearch =(req,res)=>{
    issueModel.find({id:req.query.reporterId })
    .exec((err,result)=>{
        if(err){
            logger.error(err,"error at retrieving issue : "+req.body.issueId,10);
            let apiresponse=response.generate(err,"sorry issue is not retrieved",null);
            res.send(apiresponse);
        }
        else if(check.isEmpty(result)){
            logger.error("no issue found","issues not found in find issue method",3);
            let apiresponse=response.generate(null,"user not found",404,null);
            res.send(apiresponse);
        }else{
            let apiresponse=response.generate(null,"issues",400,result);
            res.send(apiresponse);
        }
    })
}

//all issues registered.
let allIssues =(req,res)=>{
    issueModel.find().skip(parseInt(req.query.skip)).limit(4).exec((err,result)=>{
        if(err){
            logger.error(err,"error at retrieving issue : "+req.body.issueId,10);
            let apiresponse=response.generate(err,"sorry issue is not retrieved",null);
            res.send(apiresponse);
        }
        else if(check.isEmpty(result)){
            logger.error("no issue found","issues not found in find issue method",3);
            let apiresponse=response.generate(null,"user not found",404,null);
            res.send(apiresponse);
        }else{
            let apiresponse=response.generate(null,"issues",400,result);
            res.send(apiresponse);
        }
    })
    

}
//all issues
let all = (req,res)=>{
    issueModel.find({"issueId":req.query.issueId},(err,result)=>{
        if(err){
            logger.error(err,"error ",10);
            let apiresponse=response.generate(err,"sorry issue is not created,error at data base",null);
            res.send(apiresponse);
        }else{
            res.send(result);
        }
    })
}
//joining issue by assigners and watchers
let assigning = (req,res)=>{
    let newIssue = new issueModel({
        issueId:shortid.generate(),
        recId:req.body.issueId,
        issueName:req.body.issueName,
        issueDescription:req.body.issueDescription,
        issueReporter:req.body.issueReporter,
        assignedId:req.body.assignedId,
        id:req.body.assignedId,
        reporterId:" ",
        status:req.body.status,
        createdOn:time.now()
    })
    newIssue.save((err,result)=>{
        if(err){
            logger.error(err,"error at saving new issue",10);
            let apiresponse=response.generate(err,"sorry issue is not created,error at data base",null);
            res.send(apiresponse);
        }else{
            let apiresponse = response.generate(null,"Issue created",200,newIssue);
            res.send(apiresponse);
        }
    })
}
// storing files 
let allFiles = (req,res)=>{
    let newfile = new fileschema({
        issueId:req.body.issueId,
        originalName:req.body.originalName,
        fileName:req.body.fileName
    })
    newfile.save((err,result)=>{
        if(err){
            logger.error(err,"error at saving new issue",10);
            let apiresponse=response.generate(err,"sorry file is not created,error at data base",null);
            res.send(apiresponse);
        }else{
            let apiresponse = response.generate(null,"files created",200,newfile);
            res.send(apiresponse);
        }
    })
}

let getfiles =(req,res)=>{
    fileschema.find({"issueId":req.body.issueId},(err,result)=>{
        if(err){
            res.send(err);
        }else if(check.isEmpty(result)){
           res.send("no files available");
        }else{
            res.send(result);
        }
    })
}


//get comments 
 let getComments = (req,res)=>{
    
        if(check.isEmpty(req.body.issueId)){
            logger.error('no issue id is present','please provide issue Id',7);
            let apiresponse = response.generate('provide issue Id',"please provide issue id",400,null)
            res.send(apiresponse)
        }else{
            comment.find({"issueId":req.body.issueId}).sort('-time').skip(parseInt(req.body.skip))
            .lean().limit(10).exec((err,result)=>{
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Chat Controller: getUsersChat', 10)
                    let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
                       res.send(apiResponse)
                  } else if (check.isEmpty(result)) {
                    logger.info('No Chat Found', 'Chat Controller: getUsersChat')
                    let apiResponse = response.generate(true, 'No Comments Found', 404, null)
                    res.send(apiResponse)
                  } else {
                    console.log('comments found and listed.')
        
                    // reversing array.
                    let reverseResult = result.reverse()
        
                    res.send(reverseResult)
                  }

            })
        }
    
 }
 //create Assigner
 let createAssigner = (req,res)=>{
    let newassigner = new assigners({
        IssueId:req.body.issueId,
        userId:req.body.userId,
        userName:req.body.firstName
    })
    newassigner.save((err,result)=>{
        if(err){
            logger.error(err,"assigner is not created",10);
            let apiresponse=response.generate(err,"assigner is not created",null);
            res.send(apiresponse);
        }else{
            let apiresponse = response.generate(null,"assigner is created",200,result);
            res.send(apiresponse);
        }
    })
 }
 
 
 
let getAssigners = (req,res)=>{
    assigners.find({IssueId:req.query.issueId},(err,result)=>{
        if(err){
            logger.error(err,"error at assigners : "+req.body.issueId,10);
            let apiresponse=response.generate(err,"sorry issue is not retrieved",null);
            res.send(apiresponse);
        }
        else if(check.isEmpty(result)){
            logger.error("no assigners found","assigners not found in find issue method",3);
            let apiresponse=response.generate(null,"user not found",404,null);
            res.send(apiresponse);
        }else{
            let apiresponse=response.generate(null,"issues",400,result);
            res.send(apiresponse);
        }
    })
}

let editIssue = (req,res)=>{
    let edit1 =()=>{
        return new Promise((resolve,reject)=>{
            let options = req.body;
            issueModel.update({"issueId":req.body.issueId},options,{multi:true},(err,result)=>{
                if(err){
                    logger.error(err,"at edit issue1",7);
                    let apiresponse=response.generate(err,"error at edit issue 1",400,null);
                    reject(apiresponse)
                }else if(check.isEmpty(result)){
                 logger.info("no issue found to update","at edit issue 1",0);
                 let apiresponse=response.generate(null,"no issues found",404,null);
                 reject(apiresponse);
                }else{
                    resolve(options);
                }
            })
        })
    }
    let edit2=(options)=>{
          return new Promise((resolve,reject)=>{
              issueModel.update({"recId":req.body.issueId},options,{multi:true},(err,result)=>{
                  if(err){
                    logger.error(err,"at edit issue2",7);
                    let apiresponse=response.generate(err,"error at edit issue 2",400,null);
                    reject(apiresponse)
                  }else if(check.isEmpty(result)){
                    logger.info("no issue found to update","at edit issue 1",0);
                    let apiresponse=response.generate(null,"no issues found",404,null);
                    reject(apiresponse);
                  }else{
                      let apiresponse = response.generate(null,"all issues are uptodate",200,null);
                      resolve(apiresponse);
                  }
              })
          })
    }
    edit1(req,res)
    .then(edit2)
    .then((resolve)=>{
        res.send(resolve);
    })
    .catch((err)=>{
        res.send(err);
    })
}

module.exports={
createIssue:createIssue,
findissue:findissue,
myissue:myissue,
allIssues:allIssues,
allFiles:allFiles,
removeIssue:removeIssue,
createFile:createFile,
assigners:assigning,
getComments:getComments,
all:all,
createAssigner:createAssigner,
getAssigners:getAssigners,
editIssue:editIssue,
getfiles:getfiles,
searchIssue:issuesForSearch
}