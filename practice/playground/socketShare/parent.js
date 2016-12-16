var child = require('child_process').fork('child.js');

var server = require('net').createServer();

server.on('connection', function (socket) {
  socket.on('data', function (data) {
    console.log('parent received socket message');
    console.log(data.toString());
  })
  child.send('socket', socket);

  server.getConnections(function (err, count) {
    console.log('Connections : ' + count);
  })
});

server.listen(1337);
