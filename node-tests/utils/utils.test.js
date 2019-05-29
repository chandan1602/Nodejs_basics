const expect = require('expect');

const utils = require('./utils.js')

describe('Utils', () => {

  describe('#add', () => {
    it('Access Granted', () => {
      var res =  utils.add(33, 11);

      expect(res).toBeA('number');

    //   if(res !== 44) {
    //   throw new Error('Access Denied!')
    // }
    })

  })

  it('Access Granted', () => {
    var res2 = utils.square(9);

    expect(res2).toBeA('number');
    // if (res2 !== 81) {
    //   throw new Error('Bad Request!');
    // }
  })

});

it('should expect some values', () => {
  // expect(12).toNotBe(1);
  // expect({name: 'chandan'}).toNotEqual({name: 'Chandan'});
  // expect([2,3,4]).toExclude(1);
  expect({
    name: 'Chandan',
    age: 19,
    location: 'Punjab'
  }).toExclude({
    age: 20
  })
});

it('Should set firstName and lastName', () => {
  var user = {location: 'India',
age: 19};
var res = utils.setName(user, 'Chandan Bansal');

// expect(user).toEqual(res);
expect(res).toInclude({
  firstName: 'Chandan',
  lastName: 'Bansal'
})
})
// assert it includes firstName and lastName with proper values
