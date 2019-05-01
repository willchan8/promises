/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
Promise.promisifyAll(fs);


// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO

  // I: file path
  // O: return promise which resolves to being the first line
  // C: none
  // E: if the filepath doesn't exist

  // Go to the file path
  // Read the file *async
  // When this is done, 
    // match the regex for first line
  // return a promise which resolves to the first line

  return fs.readFileAsync(filePath).then(data => { 
    let firstLineSieve = /.+/;
    let matchFirstLine = String(data).match(firstLineSieve);
    return matchFirstLine ? matchFirstLine[0] : null;
  });

  // var promise = new Promise((resolve, reject) => {
  //   // do some Async work
  //   fs.readFile(filePath, (err, data) => {
  //     if (err) {
  //       reject();
  //     } 
  //   resolve(data);
  // });

  // promise.then((result, error) => {
  //   let firstLineSieve = /.+/;
  //   let matchFirstLine = String(data).match(firstLineSieve);
  //   return matchFirstLine ? matchFirstLine[0] : null;
  // })
  
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO

  return request(url).then(response => response.statusCode);

  // request(url, (error, response) => {
  //   if (error) {
  //     return callback(error);
  //   } else if (response && response.statusCode === 200) {
  //     callback(null, response.statusCode);
  //   }
  // });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
