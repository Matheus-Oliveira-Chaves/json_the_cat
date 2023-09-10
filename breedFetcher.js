const request = require('request'); //import request 

const fetchBreedDescription = function (breedName, callback) {

const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


// Send GET request to apiUrl
request(apiUrl, (error, response, body) => {

  // Check for error during request and print error
  if (error) {
    callback(error, null);


  } else {
    // Parse the 'body' 
    const data = JSON.parse(body);

    // Extract the first element 
    const firstBreed = data[0];

    // Check if exists and print description value
    if (firstBreed) {
      callback(null, firstBreed.description);


    } else {
      // If undefined, print 'Breed not found' 
      callback('Breed not found.', null);
    }
  }
});
};

module.exports = {fetchBreedDescription};