const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
app.use(bodyParser.json());
const cors=require('cors')
app.use(cors())  
const colors=require('colors')

require('dotenv').config()


const connectToDb=require('./src/connection/connect')
connectToDb()

const Users=require('./src/models/userModel')


const loginRoute=require('./src/routes/loginRoute')
app.use(loginRoute)


const registerRoute=require('./src/routes/registerRoute')
app.use(registerRoute)







// socket
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server,{
//   cors: {
//     origin: "*",
//     methods:["GET","POST"],
//   }
// });

// io.on("connection", (socket) => {
//   console.log(`user connected':${socket.id}`);



//   socket.on("join_room",(data)=>{
//     socket.join(data)
//   })

//   socket.on("send_message",(data)=>{
//     socket.to(data.room).emit("receive_message",data.msgcontent) 
//     // console.log(data) 
//   })
// });



// server.listen(4001,()=>{
//   console.log('server running')
// })




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})