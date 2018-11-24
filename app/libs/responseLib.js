/* response generation library for api */
let generate = (err, message, status, data) => {
    let response = {
      error: err,
      message: message,
      status: status,
      data: data
    }
    return response
  }
  let file =(originalFileName,uploadName)=>{
    let response={
      originalFile:originalFileName,
      uploadName:uploadName
    }
    return response;
  }
  
  module.exports = {
    generate: generate,
    file:file
  }
  