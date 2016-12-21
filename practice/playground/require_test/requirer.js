console.log('requirer loaded');

var Requiree = require('./requiree.js');

var requirer2 = require('./requirer2.js');


var requiree = new Requiree('requirer');

console.log(requiree.required_by());

console.log(module);
