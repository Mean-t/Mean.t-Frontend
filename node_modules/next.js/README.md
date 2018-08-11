# next

next 是一个为callback风格的异步编程提供支持的工具库。
next和[Async.js](https://github.com/caolan/async)的不同之处在于：async是调用函数, next是生成函数



## 优势
* 函数复用--
针对函数而不是针对过程，可以对函数进行组合和连接。采用node风格的callback机制，直接可以复用系统函数。

* 扁平化callback层次--
使用next.pipe(fn1, fn2, fnN)连接函数，扁平化callback层次。

* 统一的异常处理--
在pipe、map、parallel等方法中进行组合的函数，一旦发生异常，则会统一跳到运行时传入callback进行处理，不用重复判断每级的error。

## API

### pipe([fn1], [fn2], [fnN])
生成一个函数，先调用fn1，完成之后以fn1的返回值调用fn2，以此类推。
在调用的时候如果有异常，直接跳到运行时传入的callback

```javascript
var add2 = next.pipe(
  function(num, callback) { callback(null, num + 1, num + 2) },
  function(num1, num2, callback) { callback(null, num1 + 3, num2 + 3) }
);

add2(1, function() {
  console.log(arguments);
});

// result: [null, 5, 6]
```

### map(fn)
生成一个函数，遍历入参每一个元素，调用fn。收集完结果之后按照传入顺序返回。
```javascript
var addEach = next.map(
  function(num, callback) { callback(null, num + 1) }
);

addEach([1,2,3], function() {
  console.log(arguments);
});
// result: [null, [2,3,4]]

```

### parallel(fn1, [fn2], [fnN])
生成一个函数，以当前参数调用每个fn，收集结果之后返回
```javascript
var parallelAction = next.parallel(
  function(num, callback) { callback(null, num + 1) },
  function(num, callback) { callback(null, num + 2) }
);

parallelAction(1, function() {
  console.log(arguments);
});
// result: [null, 2,3]

```

### concurrency(fn, limit, [onDrain])
生成一个函数，使得同时运行的fn不超过limit个，超过的调用将被缓存，当有fn执行完毕之后再执行。当所有的fn调用完毕时触发onDrain
```javascript
var throttledRunner = next.concurrency(function(a, callback) {
  console.log('start:' + a);
  setTimeout(function() {
    console.log('end:' + a);
    callback(a);
  }, Math.random() * 3000);
}, 5, function() {
  console.log('drain');
});

for (var i = 0; i < 1000; i++) {
  throttledRunner(i, function() {});
}

```

### attempt([fn1], [fn2], [fnN])
顺序尝试fn1到fnN，直到当有一个成功，返回值
next.attempt(
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

//result: [null, 2] 

```

## 一些功能示例
### [compress](https://github.com/youngjay/next/blob/master/examples/compress/compress.js)
从页面上读取script标签src -> 获取js文件内容 -> 调用uglify-js压缩 -> 写文件

