var through = require('through2');
var stream = through(write, end);

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end() {
  // done();
}

process.stdin.pipe(stream).pipe(process.stdout);

//official solution
var through = require('through2');
var tr = through(function (buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
});
process.stdin.pipe(tr).pipe(process.stdout);
