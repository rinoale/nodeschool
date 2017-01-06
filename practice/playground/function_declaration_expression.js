// expression(); // TypeError: expression is not a function

// expression2(); TypeError: expression2 is not a function

// namedExpression(); ReferenceError: namedExpression is not defined

declaration();

var expression = function () {
  console.log('this is expression');
}

var expression2 = function namedExpression() {
  console.log('thi function has a name');
}

function declaration () {
  console.log('this is declaration');
}

expression();

expression2();

declaration();
