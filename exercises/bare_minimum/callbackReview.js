/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // if file exists
    // read the file
    // convert buffer to string
    // extract everything before \n
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return callback(err);
    }
    var bufferToString = String(data);
    var regex = /(.+)/; // everything except for newline
    var regexMatch = bufferToString.match(regex) ? bufferToString.match(regex)[0] : null;
    callback(null, regexMatch);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // callback takes error and status code (200)
  request(url, (error, response) => {
    if (error) {
      return callback(error);
    } else if (response && response.statusCode === 200) {
      callback(null, response.statusCode);
    }
});
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
