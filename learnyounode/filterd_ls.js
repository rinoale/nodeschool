var fs = require('fs');

var filter = process.argv[3];

fs.readdir(process.argv[2], function (err, list){
  for(var i in list){
    if(filter == list[i].split('.')[1]){
      console.log(list[i]);
    }
  };
});

// var fs = require('fs')
// var path = require('path')
//
// var folder = process.argv[2]
// var ext = '.' + process.argv[3]
//
// fs.readdir(folder, function (err, files) {
//  if (err) return console.error(err)
//  files.forEach(function(file) {
//      if (path.extname(file) === ext) {
//          console.log(file)
//      }
//  })
// })
