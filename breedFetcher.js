const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/images/search?breed_id=${breed}`, (err, response, body) => {
    if (err) {
      return callback(err, null);
    }
    const data = JSON.parse(body);
    if (response.statusCode !== 200) {
      return callback(data.message, null);
    }
    if (body === '[]') {
      return callback('Breed Name Not Found', null);
    }
    const {description} = data[0].breeds[0];
    return callback(null, description);
  });
};

module.exports = fetchBreedDescription;