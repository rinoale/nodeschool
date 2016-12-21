console.log('requirer2 loadded');

setTimeout(function () {
  var Requiree = require('./requiree.js');
  var Requiree2 = require('./requiree2.js');

  var requiree = new Requiree('requirer2');

  console.log(requiree.required_by());

  console.log(module);

}, 1000);
