const fs = require('fs')
  , crypto = require('crypto');

const file = fs.createWriteStream('big.file');

var md5sum = crypto.createHash('md5');

for(let i=0; i<= 1e6; i++) {
  var currentDate = (new Date()).valueOf().toString();
  var random = Math.random().toString();
  var randHash = crypto.createHash('sha1').update(currentDate + random).digest('hex');

  file.write(`${randHash}\n`);
}

file.end();