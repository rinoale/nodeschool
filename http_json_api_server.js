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
      res.pipe(JSON.stringify(time_obj));
      break;
    case '/api/unixtime':
      var date = new Date();
      var time_obj = {};
      time_obj.unixtime = date.getTime();
      res.pipe(JSON.stringify(time_obj));
      break;
  }
});

server.listen(process.argv[2]);
