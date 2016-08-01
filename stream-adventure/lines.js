var split = require('split');
var through = require('through2');

var count=0;
process.stdin.pipe(split()).pipe(through(function (buffer, encoding, next){
  if (count % 2 === 0)
    this.push(buffer.toString().toLowerCase() + '\n');
  else
    this.push(buffer.toString().toUpperCase() + '\n');

  count++;
  next();
})).pipe(process.stdout);

//official solution
// var through = require('through2');
// var split = require('split');
//
// var lineCount = 0;
// var tr = through(function (buf, _, next) {
//     var line = buf.toString();
//     this.push(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//     lineCount ++;
//     next();
// });
// process.stdin
//     .pipe(split())
//     .pipe(tr)
//     .pipe(process.stdout)
// ;
