# promise.walk
Call array of promises in order (no resolve content will be reserved.)

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
		setTimeout(function () { console.log('apple'); resolve(); }, 3000);
	});
};

var orange = function () {
	return new Promise(function (resolve, reject) {
		setTimeout(function () { console.log('orange'); resolve(); }, 1000);
	});
};

var banana = function () {
	return new Promise(function (resolve, reject) {
		setTimeout(function () { console.log('banana'); resolve(); }, 2000);
	});
};

//call promises in sequential order without concerning the return result
pw.walk([apple, banana, orange], function () {
	console.log("All fruits are printed in order!");
});
```

Result:
```
apple
banana
orange
All fruits are printed in order!
```
