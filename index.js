const PromiseWalk = {
	index: 0,
	walk: function (promises, callback) {
		(function (promiseWalk, promises, callback) {
			if(promiseWalk.index < promises.length) {
				promises[promiseWalk.index]()
				.then(function () {
					promiseWalk.index++;
					promiseWalk.walk(promises, callback);
				})
				.catch(function () {
					callback();
				});
			} else {
				callback();
			}
		})(this, promises, callback);
	}
}

modules.export = PromiseWalk;

/*
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

PromiseWalk.walk([apple, banana, orange], function () {
	console.log('done!');
});
*/

