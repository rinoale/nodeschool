var mymodule = require('./make_it_modular');

mymodule(process.argv[2], process.argv[3], function(err, data) {
  if (err) return console.error('There was an error:', err);

  data.forEach(function(file) {
    console.log(file);
  })
});
