var fs = require('fs')
var path = require('path')

module.exports = function (folder, filter, callback){
  // if (err) return console.error(err);
  var ext = '.' + filter;

  var pathArr = [];

  fs.readdir(folder, function (err, files) {
    if (err) return callback(err);

    files.forEach(function(file) {
      if (path.extname(file) === ext) {
        pathArr.push(file);
      }
    });
    callback(null, pathArr);
  });
};
