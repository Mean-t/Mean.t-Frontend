define(function(require) {

var next = require('../lib/next.js');
var parallel = next.parallel;
var pipe = next.pipe;
var map = next.map;
var concurrency = next.concurrency;
var memoize = next.memoize;
var attempt = next.attempt;
var echo = next.echo;


var add2 = next.pipe(
  function(num, callback) { callback(null, num + 1, num + 2) },
  function(num1, num2, callback) { callback(null, num1 + 3, num2 + 3) }
);

add2(1, function() {
  console.log(arguments);
});


// test tool
var add = function(a, callback) {
  callback(null, a + 1);
};

var mul = function(a, callback) {
  callback(null, a * 2);
};

// pipe(fns...)
// pipe()(arg1, argN, callback) = invoke callback self with arguemnts
pipe(
  function(callback) {
    console.log('test parallel');

    parallel(next.pipe(), add, mul)(10, function() {
      console.log(arguments)
    })

    callback();
  },

  function(callback) {
    console.log('test map');

    map(next.pipe())([3, 4], 1, 2, function() {
      console.log(arguments)
    });

    console.log(arguments)
    callback();
  },

  function(callback) {
    console.log('test attempt');

    attempt(
      function(a, callback) {
        callback(1);
      }, 
      function(a, callback) {
        callback(null, 2)
      }, 
      function(a, callback) {
        callback(3)
      }
    )('error', function() {
      console.log(arguments)
    })

    callback()
  },


  function(callback) {
    console.log('test memoize');

    var fn = memoize(function(a, b, callback) {
      console.log('new call with arg:' + a + ', ' + b);
      callback(null, a, b);
    });

    fn(2, {hello: 'world'}, function(err, a, b) {
      console.log('call with arg:' + a + ', ' + b);
    });

    fn(2, {hello: 'world'}, function(err, a, b) {
      console.log('call with arg:' + a + ', ' + b);
    });

    fn(3, {hello: 'world'}, function(err, a, b) {
      console.log('call with arg:' + a + ', ' + b);
    });


    fn(3, 'a', function(err, a, b) {
      console.log('call with arg:' + a + ', ' + b);
    });

    callback();
  },

  function(callback) {
    var TASK_COUNT = 10;
    var LIMIT = 3;

    console.log('test concurrency:LIMIT=' + LIMIT + ', TASK_COUNT=' + TASK_COUNT);

    var fn = concurrency(function(a, callback) {
      console.log('start:' + a);
      setTimeout(function() {
        console.log('end:' + a);
        callback(a);
      }, Math.random() * 3000);
    }, LIMIT, function() {
      console.log('drain');
    });

    var completeNum = 0;
    for (var i = 0; i < TASK_COUNT; i++) {
      fn(i, function(a) {
        completeNum += 1;
      })
    };

    var timer = setInterval(function() {
      if (completeNum === TASK_COUNT) {
        clearInterval(timer);
        callback();
      }
    }, 1000);
  },
  // finish
  function() {
    console.log('All tests completed successfully')
  }
)(function(err) {
  console.log(err);
});




})