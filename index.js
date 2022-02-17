const fetchBreedDescription = require('./breedFetcher');
const arg = process.argv[2];

if (!arg) return console.log('Please Enter a Breed Name in the Console.');
const breed = arg.slice(0, 4).toLowerCase();

fetchBreedDescription(breed, (err, desc) => {
  if (err) {
    console.log('Error fetch details: ', err);
  } else {
    console.log(desc);
  }
});