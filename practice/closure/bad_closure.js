// This example is explained in detail below (just after this code box).
function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
      console.log('defining %d + %d', i, uniqueID);
      theCelebrities[i]["id"] = function ()  {
        console.log('I when using %d', i);
        console.log('using %d + %d', i, uniqueID);
        return uniqueID + i;
      }
    }
    
    return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0];
console.log(stalloneID.id()); // 103

var cruiseID = createIdForActionCelebs [1];
console.log(cruiseID.id()); // 103

var willisID = createIdForActionCelebs [2];
console.log(willisID.id()); // 103
