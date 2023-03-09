const express = require('express');
const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

app.use(express.static(__dirname+'/public'))
app.set('view engine' , 'ejs');

let vedioSrc = '';

io.on('connection', socket => {

  socket.on('connect', data => { console.log('user connected');});
  socket.on('disconnect', () => { /* … */ });

  socket.on('getvideoSrc' , (videosrc)=>{
    vedioSrc = videosrc;
  
  })


});

app.get('/' , (req,res)=>{
    res.render('client1');
})

app.get('/client2' , (req,res)=>{
    res.render('client2' , {vedioSrc : vedioSrc});
})


















server.listen(3000 , console.log('server started...'))