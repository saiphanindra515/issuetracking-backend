define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "C__projects_1_boilerplate_code_app_apidoc_main_js",
    "groupTitle": "C__projects_1_boilerplate_code_app_apidoc_main_js",
    "name": ""
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/allDevelopers",
    "title": "api to track assigners of issue.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \"createdOn\": \"date\",\n     \"mobileNumber\": \"number\",\n     \"email\": \"string\",\n     \"lastName\": \"\",\n     \"firstName\": \"string\",\n     \"picture\": \"string\",\n     \"userId\": \"string\"\n     \n     \n\n        }\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./routes/user.js",
    "groupTitle": "issues",
    "name": "PostApiV1UsersAlldevelopers"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/assigners",
    "title": "api to assign issue for assigners.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Id of an issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueName",
            "description": "<p>Name of an issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueDescription",
            "description": "<p>Description of an issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueReporter",
            "description": "<p>creator of an issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Name",
            "description": "<p>name of an assingnee. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>status of an issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \n\"__v\": 0,\n\"_id\": \"string\",\n\"createdOn\": \"date\",\n\"issueName\": \"string\",\n\"issueDescription\": \"string\",\n\"issueReporter\": \"\",\n\"issueId\": \"string\",\n\"status\" : \"string\",\n\"reportedId\":\"string\"\n\n        }\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./routes/user.js",
    "groupTitle": "issues",
    "name": "PostApiV1UsersAssigners"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/createAssigner",
    "title": "api to create assigners of issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Id of an issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assignedId",
            "description": "<p>Id of assigned person. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueName",
            "description": "<p>Name of an issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueReporter",
            "description": "<p>Name of an issuereporter. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueDescription",
            "description": "<p>Description of an issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>status of an issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     issueId:\"string\",\n     recId:\"string\",\n     issueName:\"string\",\n     issueDescription:\"string\",\n     issueReporter:\"string\",\n     assignedId:\"string\",\n     id:\"string\",\n     reporterId:\" \",\n     status:\"string\",\n     createdOn:\"date\"\n\n        }\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./routes/user.js",
    "groupTitle": "issues",
    "name": "PostApiV1UsersCreateassigner"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/createFile",
    "title": "api to create a file.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Id of an issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "originalFileName",
            "description": "<p>Name of a original file file. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fileName",
            "description": "<p>name of a file. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \n      issueId:req.body.issueId,\n      originalFileName:req.body.orgfilename,\n      fileName:req.body.fileName\n\n        }\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./routes/user.js",
    "groupTitle": "issues",
    "name": "PostApiV1UsersCreatefile"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/createIssue",
    "title": "api to generate an issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueName",
            "description": "<p>Name of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueDescription",
            "description": "<p>Description about issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueReporter",
            "description": "<p>Name of issue reporter. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ReporterId",
            "description": "<p>Id of issue reporter. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>status of issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \"token\": \"string\",\n     \"userId\": \"string\",\n\n\"__v\": 0,\n\"_id\": \"string\",\n\"createdOn\": \"date\",\n\"issueName\": \"string\",\n\"issueDescription\": \"string\",\n\"issueReporter\": \"\",\n\"issueId\": \"string\",\n\"status\" : \"string\",\n\"reportedId\":\"string\"\n        }\n    \n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./routes/user.js",
    "groupTitle": "issues",
    "name": "PostApiV1UsersCreateissue"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/editIssue",
    "title": "api to edit issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Id of an issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueName",
            "description": "<p>name of an issue if you want to edit. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \n\n\n        }\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./routes/user.js",
    "groupTitle": "issues",
    "name": "PostApiV1UsersEditissue"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/getAssigners",
    "title": "api to getpeople Assigned to particular issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Id of an issue. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \"IssueId\":\"string\",\n     \"userId\":\"string\",\n     \"userName\":\"string\"\n\n\n        }\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./routes/user.js",
    "groupTitle": "issues",
    "name": "PostApiV1UsersGetassigners"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/getComments",
    "title": "api to track assigners of issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Id of an issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \"senderName\":\"String\",\n     \"senderId\":\"String\",\n     \"issueId\":\"string\",\n     \"message\":\"string\",\n     \"comment\":\"boolean\"\n     \n\n        }\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./routes/user.js",
    "groupTitle": "issues",
    "name": "PostApiV1UsersGetcomments"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/removeIssue",
    "title": "api to remove issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Id of an issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n   'n':\"number\",\n   \"ok\":\"string\"\n     \n\n        }\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./routes/user.js",
    "groupTitle": "issues",
    "name": "PostApiV1UsersRemoveissue"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/trackAssigner",
    "title": "api to track assigners of issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Id of an issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>name of an issue if you want to edit. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of the user (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \"IssueId\":\"string\",\n     \"userName\":\"string\",\n     \"userId\":\"string\"\n     \n\n        }\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./routes/user.js",
    "groupTitle": "issues",
    "name": "PostApiV1UsersTrackassigner"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/allIssues",
    "title": "api to retreive all issues running currently.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \n\"__v\": 0,\n\"_id\": \"string\",\n\"createdOn\": \"date\",\n\"issueName\": \"string\",\n\"issueDescription\": \"string\",\n\"issueReporter\": \"\",\n\"issueId\": \"string\",\n\"status\" : \"string\",\n\"reportedId\":\"string\"\n\n        }\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersAllissues"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/allIssues",
    "title": "api to retreive all issues running currently.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \n\"__v\": 0,\n\"_id\": \"string\",\n\"createdOn\": \"date\",\n\"issueName\": \"string\",\n\"issueDescription\": \"string\",\n\"issueReporter\": \"\",\n\"issueId\": \"string\",\n\"status\" : \"string\",\n\"reportedId\":\"string\"\n\n        }\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersAllissues"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/createFiles",
    "title": "api to save files data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Id of an issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "originalName",
            "description": "<p>original name of file. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fileName",
            "description": "<p>fileName that stored in database. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n         \"token\": \"string\",\n         \"userId\": \"string\",\n\"userDetails\": {\n    \"__v\": 0,\n    \"_id\": \"string\",\n    \"createdOn\": \"date\",\n    \"mobileNumber\": \"number\",\n    \"email\": \"string\",\n    \"lastName\": \"\",\n    \"firstName\": \"string\",\n    \"picture\": \"string\",\n    \"userId\": \"string\"\n            }\n        }\n\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "./routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersCreatefiles"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/findIssue",
    "title": "api to retreive all issues running currently.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Id of an issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \n\"__v\": 0,\n\"_id\": \"string\",\n\"createdOn\": \"date\",\n\"issueName\": \"string\",\n\"issueDescription\": \"string\",\n\"issueReporter\": \"\",\n\"issueId\": \"string\",\n\"status\" : \"string\",\n\"reportedId\":\"string\"\n\n        }\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersFindissue"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body param) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"token\":\n        \"userId\":\n        \"userDetails\":{\n            \"firstName\":\n            \"lastName\":\n            \"userId\":\n            \"mobileNumber\":\n            \"createdOn\":\n            \"email\":\n        }\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for user signup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"mobileNumber\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/socialSignup",
    "title": "api to generate token for social login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": "<p>image string of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n         \"token\": \"string\",\n         \"userId\": \"string\",\n\"userDetails\": {\n    \"__v\": 0,\n    \"_id\": \"string\",\n    \"createdOn\": \"date\",\n    \"mobileNumber\": \"number\",\n    \"email\": \"string\",\n    \"lastName\": \"\",\n    \"firstName\": \"string\",\n    \"picture\": \"string\",\n    \"userId\": \"string\"\n            }\n        }\n\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "./routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSocialsignup"
  }
] });
