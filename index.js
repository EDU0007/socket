const express = require('express')
const path = require('path')
require('dotenv').config();
const app = express();
const server = require('http').createServer(app)
module.exports.io = require('socket.io')(server);
require('./sockets/socket');


const publicpath = path.resolve(__dirname,'public')

app.use(express.static(publicpath))

server.listen(process.env.PORT, (err)=>{
    if (err)  throw new ErrorEvent(err);
    console.log('Servidor rodando em ', process.env.PORT)
  
    
})
