const request = require('request');
const {inspect} = require('util');
const breed = process.argv[2].toLowerCase();

if (!breed) return console.log('Please Enter a Breed Name in the Console.');

request(`https://api.thecatapi.com/v1/images/search?breed_id=${breed}`, (err, response, body) => {
  if (err) return console.log(err);
  if (body === '[]') return console.log('Breed Name Not Found');
  const {description} = JSON.parse(body)[0].breeds[0];
  console.log(description);
});