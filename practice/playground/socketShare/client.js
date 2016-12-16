var net = require('net');

var socket = new net.Socket();

socket.connect(1337, '127.0.0.1', function () {
  console.log('done');
  socket.write('test message');
});

socket.on('data', function (data) {
  console.log(data.toString());
})

process.stdin.on('data', function (data) {
  socket.write(data.toString());
})
