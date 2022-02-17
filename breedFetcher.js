const request = require('request');
const {inspect} = require('util');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/images/search?breed_id=${breed}`, (err, response, body) => {
  const {description} = JSON.parse(body)[0].breeds[0];
  console.log(description);
});
