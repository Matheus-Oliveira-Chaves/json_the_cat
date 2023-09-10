const request = require('request'); //import request 

const breedName = process.argv[2]; //Fetch command line arguments

const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


// Send GET request to apiUrl
request(apiUrl, (error, response, body) => {

  // Check for error during request and print error
  if (error) {
    console.error('Request error:', error);


  } else {
    // Parse the 'body' 
    const data = JSON.parse(body);

    // Extract the first element 
    const firstBreed = data[0];

    // Check if exists and print description value
    if (firstBreed) {
      console.log(firstBreed.description);


    } else {
      // If undefined, print 'Breed not found' 
      console.log('Breed not found.');
    }
  }
});