var child = require('child_process').fork('child.js');

var server = require('net').createServer();

server.on('connection', function (socket) {
  socket.on('data', function (data) {
    console.log('parent : ' + data);
    socket.write('Echo from parent : ' + data);
  });

  setTimeout(function () {
    child.send('socket', socket);
  }, 30000);

  server.getConnections(function (err, count) {
    console.log('Connections : ' + count);
  })
});

child.on('message', function (message, socket) {
  console.log('Child sent : ' + message);

  socket.on('data', function (data) {
    console.log('parent2 : ' + data);
    socket.write('Echo from parent2 : ' + data);
  })
})

server.listen(1337);
