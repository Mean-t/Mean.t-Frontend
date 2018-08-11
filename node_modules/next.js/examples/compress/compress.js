/*

usage:
node compress.js /home/path/to/src.html

output:
/home/path/to/index-min.js

process:
1  find the "<script>" tags
2  read the script src
3  combine them and use "uglify-js" to compress them into one file
4  write it into srcPath/outputFileName

*/

var fs = require('fs');
var path = require('path');
var uglify = require('uglify-js');
var next = require('../../index.js');

var fileName = process.argv[2];
var filePath = path.dirname(fileName);
var outputFileName = 'index-min.js';
var rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;


var run = next.pipe(
  function(fileName, callback) {
    if (!fileName) {
      callback('调用的时候请输入文件名，例如:node compress.js code.html');
    } else {
      callback(null, fileName);
    }
  },

  function(fileName, callback) {
    fs.readFile(fileName, 'utf-8', callback);
  },

  function(content, callback) {
    var srcs = [];
    content.match(rscript).forEach(function(str) {
      var i = str.indexOf('src="');
      if (i !== -1) {       
        str = str.substring(i + 5);
        str = str.substring(0, str.indexOf('"'));
        if (str !== outputFileName) {
          srcs.push(str);
        }
      }
    });
    callback(null, srcs);
  },

  next.map(function(src, callback) {
    var srcFileName = path.resolve(filePath, src);
    console.log('read file from: ' + srcFileName);
    fs.readFile(srcFileName, 'utf-8', callback);
  }),

  function(contents, callback) {
    console.log('compressing content...')
    callback(null, uglify(contents.join('')));
  },

  function(distCode, callback) {
    var distFileName = path.resolve(path.join(filePath, outputFileName));
    console.log('write file to: ' + distFileName);
    fs.writeFile(distFileName, distCode, 'utf-8', callback);
  }
)

run(fileName, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('compress file complete');
  }
});

