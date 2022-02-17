const request = require('request');

const arg = process.argv[2];
if (!arg) return console.log('Please Enter a Breed Name in the Console.');

const breed = arg.toLowerCase();
request(`https://api.thecatapi.com/v1/images/search?breed_id=${breed}`, (err, response, body) => {
  if (err) return console.log(err);
  const data = JSON.parse(body);
  if (response.statusCode !== 200) return console.log(data.message);
  if (body === '[]') return console.log('Breed Name Not Found');
  const {description} = data[0].breeds[0];
  console.log(description);
});