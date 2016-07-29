this.glob = 'global';


var func = function () {
  this.thest = 'thest';
  test = 'test';

  console.log(this);
}

console.log(this);
func(this.glob);
