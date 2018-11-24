const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig");
const issueController = require("./../controllers/issueController");

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;

    // defining routes.


    // params: firstName, lastName, email, mobileNumber, password
    app.post(`${baseUrl}/signup`, userController.signUpFunction);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/signup api for user signup.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params)
     * @apiParam {string} firstName name of the user. (body params) (required)
     * @apiParam {string} lastName  lastName of the user. (body params)
     * @apiParam {string} mobileNumber  mobileNumber of the user. (body params)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Login Successful",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc",
                "userDetails": {
                "mobileNumber": 2234435524,
                "email": "someone@mail.com",
                "lastName": "Sengar",
                "firstName": "Rishabh",
                "userId": "-E9zxTYA8"
            }

        }
    */

    // params: email, password.
    app.post(`${baseUrl}/login`, userController.loginFunction);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for user login.
     *
     * @apiParam {string} email email of the user. (body param) (required)
     * @apiParam {string} password password of the user. (body param) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Logged Out Successfully",
            "status": 200,
            "data": {
                "token":
                "userId":
                "userDetails":{
                    "firstName":
                    "lastName":
                    "userId":
                    "mobileNumber":
                    "createdOn":
                    "email":
                }
            }

        }
    */

    // params: name,email,image
  app.post(`${baseUrl}/socialSignup`,userController.socialLogin);
  /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/socialSignup  api to generate token for social login
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} image image string of the user. (body params) (required)
     * @apiParam {string} name name of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
             "token": "string",
             "userId": "string",
    "userDetails": {
        "__v": 0,
        "_id": "string",
        "createdOn": "date",
        "mobileNumber": "number",
        "email": "string",
        "lastName": "",
        "firstName": "string",
        "picture": "string",
        "userId": "string"
                }
            }

        }
    */
    

    // auth token params: userId.
    app.post(`${baseUrl}/logout`, userController.logout);


      // params: name,email,image
  app.post(`${baseUrl}/createIssue`,issueController.createIssue);
  /**
     * @apiGroup issues
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/createIssue  api to generate an issue
     *
     * @apiParam {string} issueName Name of the issue. (body params) (required)
     * @apiParam {string} issueDescription Description about issue. (body params) (required)
     * @apiParam {string} issueReporter Name of issue reporter. (body params) (required)
     * @apiParam {string} ReporterId Id of issue reporter. (body params) (required)
     * @apiParam {string} status  status of issue. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
             "token": "string",
             "userId": "string",
    
        "__v": 0,
        "_id": "string",
        "createdOn": "date",
        "issueName": "string",
        "issueDescription": "string",
        "issueReporter": "",
        "issueId": "string",
        "status" : "string",
        "reportedId":"string"
                }
            

        }
    */

      // params: name,email,image
  app.post(`${baseUrl}/createFiles`,issueController.allFiles);
  /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/createFiles  api to save files data
     *
     * @apiParam {string} issueId Id of an issue. (body params) (required)
     * @apiParam {string} originalName original name of file. (body params) (required)
     * @apiParam {string} fileName fileName that stored in database. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
             "token": "string",
             "userId": "string",
    "userDetails": {
        "__v": 0,
        "_id": "string",
        "createdOn": "date",
        "mobileNumber": "number",
        "email": "string",
        "lastName": "",
        "firstName": "string",
        "picture": "string",
        "userId": "string"
                }
            }

        }
    */


      // params: name,email,image
  app.get(`${baseUrl}/allIssues`,issueController.allIssues);
  /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/allIssues  api to retreive all issues running currently.
     * @apiParam {string} skip how many record to skip (query param) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
             
        "__v": 0,
        "_id": "string",
        "createdOn": "date",
        "issueName": "string",
        "issueDescription": "string",
        "issueReporter": "",
        "issueId": "string",
        "status" : "string",
        "reportedId":"string"
    
                }
            }

        }
    */
   app.get(`${baseUrl}/myIssues`,issueController.myissue);
   /**
      * @apiGroup users
      * @apiVersion  1.0.0
      * @api {get} /api/v1/users/allIssues  api to retreive all issues running currently.
      *
      *
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * 
      * @apiSuccessExample {object} Success-Response:
          {
              
         "__v": 0,
         "_id": "string",
         "createdOn": "date",
         "issueName": "string",
         "issueDescription": "string",
         "issueReporter": "",
         "issueId": "string",
         "status" : "string",
         "reportedId":"string"
     
                 }
             }
 
         }
     */

    app.post(`${baseUrl}/assigners`,issueController.findissue);
    /**
       * @apiGroup issues
       * @apiVersion  1.0.0
       * @api {post} /api/v1/users/assigners  api to assign issue for assigners.
       * @apiParam {string} issueId Id of an issue. (body params) (required)
       * @apiParam {string} issueName Name of an issue. (body params) (required)
       * @apiParam {string} issueDescription Description of an issue. (body params) (required)
       * @apiParam {string} issueReporter creator of an issue. (body params) (required)
       * @apiParam {string} Name name of an assingnee. (body params) (required)
       *  
       *   @apiParam {string} status status of an issue. (body params) (required)
       *
       *
       * @apiSuccess {object} myResponse shows error status, message, http status code, result.
       * 
       * @apiSuccessExample {object} Success-Response:
           {
               
          "__v": 0,
          "_id": "string",
          "createdOn": "date",
          "issueName": "string",
          "issueDescription": "string",
          "issueReporter": "",
          "issueId": "string",
          "status" : "string",
          "reportedId":"string"
      
                  }
              }
  
          }
      */
     app.post(`${baseUrl}/findIssue`,issueController.findissue);
    /**
       * @apiGroup users
       * @apiVersion  1.0.0
       * @api {post} /api/v1/users/findIssue  api to retreive all issues running currently.
       * @apiParam {string} issueId Id of an issue. (body params) (required)
       *
       * @apiSuccess {object} myResponse shows error status, message, http status code, result.
       * 
       * @apiSuccessExample {object} Success-Response:
           {
               
          "__v": 0,
          "_id": "string",
          "createdOn": "date",
          "issueName": "string",
          "issueDescription": "string",
          "issueReporter": "",
          "issueId": "string",
          "status" : "string",
          "reportedId":"string"
      
                  }
              }
  
          }
      */
     app.get(`${baseUrl}/allDevelopers`,userController.allusers);
      /**
       * @apiGroup issues
       * @apiVersion  1.0.0
       * @api {post} /api/v1/users/allDevelopers  api to track assigners of issue.
       * 
       * 
       *  
       * @apiSuccess {object} myResponse shows error status, message, http status code, result.
       * 
       * @apiSuccessExample {object} Success-Response:
           {
               "createdOn": "date",
               "mobileNumber": "number",
               "email": "string",
               "lastName": "",
               "firstName": "string",
               "picture": "string",
               "userId": "string"
               
               
      
                  }
              }
  
          }
      */
     app.post(`${baseUrl}/removeIssue`,issueController.removeIssue);
      /**
       * @apiGroup issues
       * @apiVersion  1.0.0
       * @api {post} /api/v1/users/removeIssue  api to remove issue.
       * @apiParam {string} issueId Id of an issue. (body params) (required)
       * 
       *  
       * @apiSuccess {object} myResponse shows error status, message, http status code, result.
       * 
       * @apiSuccessExample {object} Success-Response:
           {
             'n':"number",
             "ok":"string"
               
      
                  }
              }
  
          }
      */
     app.post(`${baseUrl}/removeIssue`,issueController.removeIssue);
      /**
       * @apiGroup issues
       * @apiVersion  1.0.0
       * @api {post} /api/v1/users/createFile  api to create a file.
       * @apiParam {string} issueId Id of an issue. (body params) (required)
       * @apiParam {string} originalFileName Name of a original file file. (body params) (required)
       * @apiParam {string} fileName name of a file. (body params) (required)
       * 
       *  
       * @apiSuccess {object} myResponse shows error status, message, http status code, result.
       * 
       * @apiSuccessExample {object} Success-Response:
           {
               
                issueId:req.body.issueId,
                originalFileName:req.body.orgfilename,
                fileName:req.body.fileName
      
                  }
              }
  
          }
      */
     app.post(`${baseUrl}/createAssigners`,issueController.assigners);
      /**
       * @apiGroup issues
       * @apiVersion  1.0.0
       * @api {post} /api/v1/users/createAssigner  api to create assigners of issue.
       * @apiParam {string} issueId Id of an issue. (body params) (required)
       * @apiParam {string} assignedId Id of assigned person. (body params) (required)
       * @apiParam {string} issueName Name of an issue. (body params) (required)
       * @apiParam {string} issueReporter Name of an issuereporter. (body params) (required)
       * @apiParam {string} issueDescription Description of an issue. (body params) (required)
       * @apiParam {string} status status of an issue. (body params) (required)
       * 
       *
       * @apiSuccessExample {object} Success-Response:
           {
               issueId:"string",
               recId:"string",
               issueName:"string",
               issueDescription:"string",
               issueReporter:"string",
               assignedId:"string",
               id:"string",
               reporterId:" ",
               status:"string",
               createdOn:"date "
      
                  }
              }
  
          }
      */
     
     app.post(`${baseUrl}/getComments`,issueController.getComments);
      /**
       * @apiGroup issues
       * @apiVersion  1.0.0
       * @api {post} /api/v1/users/getComments  api to track assigners of issue.
       * @apiParam {string} issueId Id of an issue. (body params) (required)
       * 
       *  
       * @apiSuccess {object} myResponse shows error status, message, http status code, result.
       * 
       * @apiSuccessExample {object} Success-Response:
           {
               "senderName":"String",
               "senderId":"String",
               "issueId":"string",
               "message":"string",
               "comment":"boolean"
               
      
                  }
              }
  
          }
      */
     app.post(`${baseUrl}/trackAssigner`,issueController.createAssigner);
      /**
       * @apiGroup issues
       * @apiVersion  1.0.0
       * @api {post} /api/v1/users/trackAssigner  api to track assigners of issue.
       * @apiParam {string} issueId Id of an issue. (body params) (required)
       *  @apiParam {string} firstName name of an issue if you want to edit. (body params) (required)
       *  @apiParam {string} userId   Id of the user (body params) (required)
       *  
       * @apiSuccess {object} myResponse shows error status, message, http status code, result.
       * 
       * @apiSuccessExample {object} Success-Response:
           {
               "IssueId":"string",
               "userName":"string",
               "userId":"string"
               
      
                  }
              }
  
          }
      */
     app.get(`${baseUrl}/getAssigners`,issueController.getAssigners);
      /**
       * @apiGroup issues
       * @apiVersion  1.0.0
       * @api {post} /api/v1/users/getAssigners  api to getpeople Assigned to particular issue.
       * @apiParam {string} issueId Id of an issue. (query params) (required)
       * 
       *
       * @apiSuccess {object} myResponse shows error status, message, http status code, result.
       * 
       * @apiSuccessExample {object} Success-Response:
           {
               "IssueId":"string",
               "userId":"string",
               "userName":"string"
         
      
                  }
              }
  
          }
      */
     
     app.put(`${baseUrl}/editIssue`,issueController.editIssue);
       /**
       * @apiGroup issues
       * @apiVersion  1.0.0
       * @api {post} /api/v1/users/editIssue  api to edit issue.
       * @apiParam {string} issueId Id of an issue. (body params) (required)
       *  @apiParam {string} issueName name of an issue if you want to edit. (body params) (required)
       *
       * @apiSuccess {object} myResponse shows error status, message, http status code, result.
       * 
       * @apiSuccessExample {object} Success-Response:
           {
               
         
      
                  }
              }
  
          }
      */
     app.post(`${baseUrl}/getfiles`,issueController.getfiles);
     app.post(`${baseUrl}/searchIssues`,issueController.searchIssue);
}
