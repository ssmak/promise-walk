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

module.exports = PromiseWalk;


