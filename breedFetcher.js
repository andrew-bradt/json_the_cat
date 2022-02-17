const request = require('request');
const {inspect} = require('util');

request('https://api.thecatapi.com/v1/images/search?breed_id=sibe', (err, response, body) => {
  const {description} = JSON.parse(body)[0].breeds[0];
  console.log(description);
});
