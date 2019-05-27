var square = x => x*x;
console.log(square(9));

var user = {
  name: 'Chandan',
  sayHi: () => {
    console.log(arguments);
    console.log('Hi. I am ', this.name);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log('Hi. I am ', this.name);
  }

};

user.sayHiAlt(1, 2, 3);
user.sayHi(1, 2, 3);
