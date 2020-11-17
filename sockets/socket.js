const { io } = require('../index')
io.on('connection', client => {
    console.log('cliente conectado')
    client.on('disconnect', () => { 
        console.log('cliente desconectado')
     });
     client.on('menssagen',(payload)=>{
       console.log('Mensaje!!',payload.nome);
       io.emit('mensaje',{Admin:'nova menssagem'})
     })
  });