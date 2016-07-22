var fs = require('fs')
var path = require('path')

module.exports = function (folder, filter, callback){
  fs.readdir(folder, function (err, files) {
    if (err) return callback(err);

    pathArr = files.filter(function (file) {
      return path.extname(file) === '.' + filter;
    })

    callback(null, pathArr);
  });
};
