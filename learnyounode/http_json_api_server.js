var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  var url_obj = url.parse(req.url, true);

  res.writeHead(200, { 'Content-Type': 'application/json' });

  switch(url_obj.pathname) {
    case '/api/parsetime':
      var date = new Date(url_obj.query.iso);
      var time_obj = {};
      time_obj.hour = date.getHours();
      time_obj.minute = date.getMinutes();
      time_obj.second = date.getSeconds();
      res.write(JSON.stringify(time_obj));
      res.end();
      break;
    case '/api/unixtime':
      console.log(url_obj);
      var date = new Date(url_obj.query.iso);
      var time_obj = {};
      time_obj.unixtime = date.getTime();
      res.end(JSON.stringify(time_obj));
      break;
  }
});

server.listen(process.argv[2]);


//official solution
// var http = require('http')
// var url = require('url')
//
// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }
//
// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }
//
// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result
//
//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)
//
//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
