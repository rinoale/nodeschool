process.on('message', function (message, socket) {
  socket.on('data', function (data) {
    console.log('child received socket message');
    socket.write('Echo : ' + data);
  })
})
