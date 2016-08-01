function foo () {
  function bar () {
    quux = 0;
  }

  bar();
}

foo();

console.log(quux);
