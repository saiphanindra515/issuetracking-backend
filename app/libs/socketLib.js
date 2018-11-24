const socketio = require('socket.io');
const tokenLib = require('./TokenLib');
const events = require('events');
const eventEmitter = new events.EventEmitter();
const mongoose = require('mongoose');
const savemsg = mongoose.model('savemessage');
const logger = require('./loggerLib');
const response = require('./responseLib');
const notification = mongoose.model('notificationSchema');
const redis= require('./redisLib');
let resultStorage;
let setServer = (server)=>{
  let io=socketio.listen(server);
  let myio = io.of('');
  myio.on('connection',(socket)=>{
      console.log('connection established');
      socket.emit('verifyUser','data');
      socket.on('setUser',(authtoken)=>{
      tokenLib.verifyClaimWithoutSecret(authtoken,(err,decoded)=>{
            if(err){
                socket.emit('auth-error','user is not available');
            }else{
                console.log("user verified");
                let currentuser = decoded.data;
                console.log(currentuser);
                 socket.userId = currentuser.userId;  
                 redis.getAllUsersInAHash(currentuser.userId,(err,result)=>{
                     if(err){
                         console.log(err);
                     }else{
                         
                         for(let x in result){
                            resultStorage=result;
                             if(x!='undefined'){
                                 socket.rooms=result[x];
                             socket.join(socket.rooms);
                             console.log(`joined in room ${result[x]}`);
                             }
                         }
                     } 
                 })
            }
      })
      })//end of set-user
       // sending message
    socket.on('message',(data)=>{        
       
        socket.to(data.issueId).broadcast.emit('comments',data);  
        eventEmitter.emit('save-message',data);          
                                                
        })//end of send message
     // notification

     socket.on('notification',(data)=>{
        eventEmitter.emit('save-notification');
    
        socket.to(data.issueId).broadcast.emit('notification',data);
    })//end of notification
    socket.on('disconnect',(data)=>{
        console.log('socket left');
            socket.leaveAll();
        
    })
    eventEmitter.on('save-message',(data)=>{
       let newMsg = new savemsg({
           issueId:data.issueId,
           issueName:data.issueName,
           comment:data.comment,
           senderName:data.senderName,
           message:data.message
       }) 
       newMsg.save((err,result)=>{
        if (err) {
            console.log(`error occurred: ${err}`);
        }
        else if (result == undefined || result == null || result == "") {
            console.log("message Is Not Saved.");
        }
        else {
            console.log("message is Saved.");
            console.log(result);
        }
       })
    })

    socket.on('create-room',(data)=>{
    redis.setANewOnlineUserInHash(data.id,data.issueName,data.issueId,(err,result)=>{
        if(err){
           console.log(err);
        }else{
            console.log(result);
        }
    })
    })


   eventEmitter.on('save-notification',(data)=>{
    let newNotification = new savemsg({
        issueId:data.issueId,
        issueName:data.issueName,
        
        senderName:data.senderName,
        message:data.message
    })
    newNotification.save((err,result)=>{
        if (err) {
            console.log(`error occurred: ${err}`);
        }
        else if (result == undefined || result == null || result == "") {
            console.log("notification  Is Not Saved.");
        }
        else {
            console.log("notification is Saved.");
            console.log(result);
        }
    }) 

   })
  })

  
 


}

module.exports={
    setServer:setServer
}