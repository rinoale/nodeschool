var http = require('http');

http.get(process.argv[2], function (response) {
  var results = '';

  response.on('data', function (data) {
    results += data;
  })

  response.on('end', function () {
    console.log(results.length);
    console.log(results);
  });
});

//official solution
// var http = require('http')
// var bl = require('bl')
//
// http.get(process.argv[2], function (response) {
//  response.pipe(bl(function (err, data) {
//    if (err)
//      return console.error(err)
//    data = data.toString()
//    console.log(data.length)
//    console.log(data)
//  }))
// })
