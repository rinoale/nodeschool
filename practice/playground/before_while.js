function before(data, resolve, reject) {
  var beforefilter = [
    firstfilter,
    secondfilter
  ]

  var i=0;

  while (i < beforefilter.length) {
    beforefilter[i].call(this);

    i++;
  }

  function firstfilter() {
    if (data === 0) {
      reject('firstfilter filtered');
    }
  }

  function secondfilter() {
    if (data === 1) {
      reject('secondfilter filtered');
    }
  }
}

function execute(data) {
  return new Promise(function (resolve, reject) {
    before(data, resolve, reject);

    resolve('befirefilter passed with data : ' + data);    
  })
}


execute(0).then(function (result) {
  console.log(result);
}).catch(function (reason) {
  console.log(reason);
});
execute(1).then(function (result) {
  console.log(result);
}).catch(function (reason) {
  console.log(reason);
});
execute(2).then(function (result) {
  console.log(result);
}).catch(function (reason) {
  console.log(reason);
});
