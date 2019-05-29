const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {
var db = {
  saveUser: expect.createSpy()
};
app.__set__('db', db);

  it('Should call the spy Correctly', () => {
  var spy =  expect.createSpy();
  spy('Chandan', 19);
  expect(spy).toHaveBeenCalledWith('Chandan', 19);
});
it('should call saveUser with user Object'), () => {
  var email = 'chandan@example.com';
  var password = '123abc';

  app.handleSignup(email, password);
  expect(db.saveUser).toHaveBeenCalledWith({email, password});
}
})
