const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyArue3mB2ifINLkZhumlEqjZEvn9YVzGa4`,
      json: true
    }, (error, response, body) => {
    if(error) {
      reject('Unable to connect to google servers!');
    } else if(body.status === 'ZERO_RESULTS') {
      reject('Unable to find full address!');
    } else if (body.status === 'OK') {
      resolve({
        latitude: body.results[0].geometry.location.lat,
        address: body.results[0].formatted_address,
        longitude: body.results[0].geometry.location.lng
      })
    }
    });

  }, 1500);
};

geocodeAddress('kashmir').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
})
