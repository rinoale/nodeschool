var filterArray = [
  firstfilter,
  secondfilter
]

function firstfilter(data) {
  return new Promise(function (resolve, reject) {
    if (data !== 0) {
      resolve();
    } else {
      reject('firstfilter filtered');
    }
  })
}

function secondfilter(data) {
  return new Promise(function (resolve, reject) {
    if (data !== 1) {
      resolve('last filter done with data : ' + data);
    } else {
      reject('secondfilter filtered');
    }
  })
}

function execute(data) {
  return new Promise(function (resolve, reject) {
    function recursiveCall(stepIndex, data) {
      filterArray[stepIndex](data).then(function (result) {
        if (stepIndex < filterArray.length-1) {
          recursiveCall(stepIndex+1, data);
        } else {
          resolve(result);
        }
      }).catch(function (reason) {
        reject(reason);
      })
    }

    recursiveCall(0, data);
  })
}

execute(0).then(function (result) {
  console.log(result);
}).catch(function (reason) {
  console.log(reason);
})
execute(1).then(function (result) {
  console.log(result);
}).catch(function (reason) {
  console.log(reason);
})
execute(2).then(function (result) {
  console.log(result);
}).catch(function (reason) {
  console.log(reason);
})
