const request = require('request')

var getWeather = (lat, lng, callback) => {
  console.log(lat,lng,callback);
  request({
    url: `https://api.darksky.net/forecast/d8e7e39e5fce7924721696b2c538fe4e/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to forecast.io servers');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
}
module.exports.getWeather = getWeather;
