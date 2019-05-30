const fs = require('fs')
    , split = require('split');

var file = './big.file';

var splitstream = fs.createReadStream(file).pipe(split())
  splitstream
    .on('data', function (line) {
      //each chunk now is a seperate line!
      console.log(line);

      splitstream.pause();
      setTimeout(function (){ splitstream.resume() }, 500);
    })