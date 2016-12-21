console.log('requiree loaded');

var class_object = {};

function Requiree (requirer) {
  class_object[requirer] = requirer;
}

Requiree.prototype.required_by = function () {
  return class_object;
}

module.exports = Requiree;
