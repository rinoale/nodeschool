function recursivePromise(i) {
  return new Promise(function (resolve, reject) {
    var retry = 0;
    recur(resolve, reject, retry);
  })

  function recur(resolve, reject, retry) {
    console.log('round : ' + retry);
    if (retry === 3) {
      resolve();
    } else {
      console.log('recursive call');
      recur(resolve, reject, ++retry);
    }
  }
}

recursivePromise(0).then(function () {
  console.log('done');
}).catch(function (err) {
  console.log(err);
  console.log('rejected');
})
