const request = require('request');
const args = process.argv;
//file system module
const fs = require('fs');
const URL = (args.slice(2,3)[0]);
const path = (args.slice(3,4)[0]);

// pure functions - one thing
request(URL, (error, response, body) => {
  // console.log('error:', error);
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body:', body);
  if (!error) {
    fs.writeFileSync(path, body);
    // // 1 char = 1 byte
    let bytes = fs.statSync(path).size;
    console.log(`Downloaded and saved ${bytes} bytes to ${path}.`);
  };
});


