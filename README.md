# promise.walk
Call promises in sequential order and return all the resolved contents to the callback function. (Rejected promise will not block the further promise execution.)

## how to use?
Install dependence:
```code
npm install promise-walk --save
```

Sample code:
```javascript
const pw = require('promise-walk');

//define promises
var apple = function () { 
	return new Promise(function (resolve, reject) {
		setTimeout(function () { console.log('apple'); resolve('eat apple'); }, 3000);
	});
};

var orange = function () {
	return new Promise(function (resolve, reject) {
		setTimeout(function () { console.log('orange'); resolve('eat orange'); }, 1000);
	});
};

var banana = function () {
	return new Promise(function (resolve, reject) {
		setTimeout(function () { console.log('banana'); resolve('eat banana'); }, 2000);
	});
};

//call promises in sequential order without concerning the return result
pw.walk([apple, banana, orange], function (results) {
	console.log('All promise results are stored here:');
	console.log(results);
});
```

Result:
```
apple
banana
orange
All promise results are stored here:
[ 'eat apple', 'eat banana', 'eat orange' ]
```
