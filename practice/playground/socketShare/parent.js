var child = require('child_process').fork('child.js');

var server = require('net').createServer();

server.on('connection', function (socket) {
  socket.on('data', function (data) {
    console.log('parent : ' + data);
    socket.write('Echo from parent : ' + data);
  });

  setTimeout(function () {
    child.send('socket', socket);
  }, 10000);

  server.getConnections(function (err, count) {
    console.log('Connections : ' + count);
  })
});

server.listen(1337);
