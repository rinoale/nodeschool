process.on('message', function (message, socket) {
  console.log('Parent sent : ' + message);
  socket.on('data', function (data) {
    console.log('child : ' + data);
    socket.write('Echo from child : ' + data);

    process.send('message', socket);
  })
})
