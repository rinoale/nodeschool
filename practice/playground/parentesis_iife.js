(function iife() {
  console.log('Run me right away!');
}());

(function iife2() {
  console.log('Run me right away!!');
})();

// iife(); ReferenceError: iife is not defined

// iife2(); ReferenceError: iife2 is not defined


var container = (function iife3() {
  console.log('Run me right away!!!');
});

var container2 = (function iife4() {
  console.log('Run me right away!!!!');

  // return true; if not return, container2 become undefined.
})();

console.log(container); // [Function: iife3]

console.log(container2); // undefined
