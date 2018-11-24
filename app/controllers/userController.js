const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const passwordLib = require('../libs/passwordhash')
const tokenlib = require('../libs/TokenLib')
/* Models */
const UserModel = mongoose.model('User')


// start user signup function 

let signUpFunction = (req, res) => {
    let validateinput=()=>{
        return new Promise((resolve,reject)=>{
            if(req.body.email){
              if(!validateInput.Email(req.body.email)){
                logger.error("email doesnot match requirements","validate input",6);
               let apiresponse = response.generate("email does not meet requirements","enter valid email",403,null);
               reject(apiresponse)
              }else if(!validateInput.Password(req.body.password)){
                logger.error("password doesnot match requirements","validate input",6);
                let apiresponse = response.generate("password does not meet requirements","enter valid password",403,null);
                reject(apiresponse)
              }else{
                  resolve(req)
              }
            }else{
                let apiresponse = response.generate(null,"email is not present!",403,null)
                     reject(apiresponse);
            }
        })
    }
    let createUser = ()=>{
        return new Promise((resolve,reject)=>{
            UserModel.findOne({'email':req.body.email},(err,retrievedResult)=>{
                if(err){
                  let apiresponse = response.generate(err,"occured error at signup",403,null)
                  reject(apiresponse);
                }else if(check.isEmpty(retrievedResult)){
                     let newUser = new UserModel({
                         userId:shortid.generate(),
                         firstName:req.body.name,  
                         email : req.body.email,
                         password:passwordLib.hashpassword(req.body.password),
                         mobileNumber:req.body.mobileNumber,
                         createdOn:time.now()
                     })
                     newUser.save((err,result)=>{
                         if(err){
                             logger.error(err,"new user cant be saved",10);
                             let apiresponse = response.generate(err,"User cant be saved, please try after some time",403,null);
                             reject(apiresponse)
                         }else{
                            let apiresponse = response.generate(err,"User created successfully",200,null);
                            console.log(newUser);
                             resolve(apiresponse)
                         }
                     })
                }else{
                 let apiresponse = response.generate(err,"Email already present",403,null)
                 reject(apiresponse);
                }
            })
        })
    }
  validateinput(req,res)
  .then(createUser)
  .then((resolve)=>{
      delete resolve.password;
    let apiresponse = response.generate(null,"user created successfully",200,resolve);
    
      res.send(apiresponse);
  })
  .catch((err)=>{
    
    
    res.send(err);
  }) 

}// end user signup function 

// start of login function 
let loginFunction = (req, res) => {
    let emailVerification = ()=>{
        return new Promise((resolve,reject)=>{
            if(req.body.email){
                
               UserModel.findOne({"email":req.body.email},(err,retrievedResult)=>{
                   if(err){
                       logger.error("error occurred in login","1",10);
                       let apiresponse = response.generate(err,"some error occured at login",403,null);
                       reject(apiresponse)
                   }else if(check.isEmpty(retrievedResult)){
                    logger.error("user is not registered","",10);
                    let apiresponse = response.generate(err,"email is not registered",404,null);
                    reject(apiresponse) 
                   }else{
                    console.log(retrievedResult);   
                    resolve(retrievedResult);
                   
                   }
               })
            }
            //if email not found
            else{
                logger.error("email is not present","",10);
                let apiresponse = response.generate(err,"enter email",403,null);
                reject(apiresponse)
            }
        })
    }//email verfication ended
     
    //password verification

    let passwordVerification = (userDetails)=>{
        return new Promise((resolve,reject)=>{
            
            passwordLib.comparePassword(req.body.password,userDetails.password,(err,match)=>{
                if(err){
                    logger.error("password wrong",1,0);
                    let apiresponse = response.generate("password didn't match","enter correct message",404,null);
                    reject(apiresponse);
                }else if(match){
                    
                    let userdetails = userDetails.toObject();
                    delete userdetails.password
                    delete userdetails._id
                    delete userdetails._v
                    resolve(userdetails)
                }
            })
        })
    }//password verification Ended

    //generate Token
   let generateToken = (userDetails)=>{
    console.log("at generate token");
       return new Promise((resolve,reject)=>{
           tokenlib.generateToken(userDetails,(err,Tokendetails)=>{
               if(err){
                   logger.error(err,'at generate token',10);
                   let apiresponse = response.generate(err,"please try later",403,null);
                   reject(apiresponse);
               }else{
                console.log("token generated");
                   Tokendetails.userId = userDetails.userId;
                   delete Tokendetails.tokensecretkey;
                   Tokendetails.userDetails = userDetails;
                   resolve(Tokendetails);
               }
           })
       })
   }//end of generate token.

   //function call
   emailVerification(req,res)
   .then(passwordVerification)
   .then(generateToken)
   .then((resolve)=>{
       let apiresponse = response.generate(null,"login successfull!",200,resolve);
       res.send(apiresponse);
   })
   .catch((err)=>{
       res.send(err);
   })

}
//social login
//checking whether user has an account.if he dont have an account we create it for future references
let socialLogin = (req,res)=>{
    //checking whether email id is registered or not
     let validateEmail =()=>{
         return new Promise((resolve,reject)=>{
             if(req.body.email){
                 UserModel.findOne({email:req.body.email},(err,retrieved)=>{
                     if(err){
                       logger(err,"some error occured at finone socialLogin",10);
                       let apiresponse = response.generate(err,"error at server:socialLogin",400,null);
                       reject(apiresponse);
                     }//end of err
                    else if(check.isEmpty(retrieved)){
                        let newUser = new UserModel({
                            userId:shortid.generate(),
                            firstName:req.body.name,
                            picture:req.body.image,
                            email : req.body.email,
                            createdOn:time.now()
                        })
                        newUser.save((err,result)=>{
                            if(err){
                                logger.error(err,"new user cant be saved",10);
                                let apiresponse = response.generate(err,"User cant be saved, please try after some time",403,null);
                                reject(apiresponse)
                            }else{
                               let apiresponse = response.generate(null,"User created successfully",200,null);
                               let obj=newUser.toObject();
                               delete obj.password;
                               console.log(obj);
                               
                                resolve(obj);
                            }
                        })
                    }else if(retrieved){
                        let obj1=retrieved.toObject();
                        delete obj1.password;
                        resolve(obj1);
                    }

                 })//end of findone

             }//end of checking email present
             else{
                 logger.error("email is not present","social login 2",6);
                 let apiresponse = response.generate("you cannot send empty","please send email",404,null);
                 reject(apiresponse);
             }//end of else
         })
     }
    //end of checking
   //generate Token (i am not using social media token.i am creating my own token).
   let generateToken = (userDetails)=>{
    console.log("at generate token");
       return new Promise((resolve,reject)=>{
           tokenlib.generateToken(userDetails,(err,Tokendetails)=>{
               if(err){
                   logger.error(err,'at generate token',10);
                   let apiresponse = response.generate(err,"please try later",403,null);
                   reject(apiresponse);
               }else{
                console.log("token generated");
                   Tokendetails.userId = userDetails.userId;
                   delete Tokendetails.tokensecretkey;
                   Tokendetails.userDetails = userDetails;
                   resolve(Tokendetails);
               }
           })
       })
   }//end of generate token 

   //end of generate token

    validateEmail(req,res)
    .then(generateToken)
    .then((resolve)=>{
        res.send(resolve);
    })
    .catch((err)=>{
        res.send(err);
    })

}//end of socialLogin


//end of social login



// end of the login function 


let logout = (req, res) => {
  
} // end of the logout function.

let allusers = (req,res)=>{
    UserModel.find((err,result)=>{
        if(err){
            logger.error(err,"at all users",9);
            let apiresponse = response.generate(err,"try later",400,null);
            res.send(apiresponse);
        }else if(check.isEmpty(result)){
            logger.info('no user found','at all',0);
            let apiresponse = response.generate(err,"No user registered",404,null);
            res.send(apiresponse);
        }else{
            
            res.send(result);
        }
    })
}

module.exports = {

    signUpFunction: signUpFunction,
    loginFunction: loginFunction,
    logout: logout,
    socialLogin:socialLogin,
    allusers:allusers

}// end exports