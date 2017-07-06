const PromiseWalk = {
	results: [],
	index: 0,
	walk: function (promises, callback) {
		(function (promiseWalk, promises, callback) {
			if(promiseWalk.index < promises.length) {
				promises[promiseWalk.index]()
				.then(function (result) {
					if(result) {
						promiseWalk.results.push(result);
					}
					promiseWalk.index++;
					promiseWalk.walk(promises, callback);
				})
				.catch(function () {
					promiseWalk.index++;
					promiseWalk.walk(promises, callback);
					//callback(promiseWalk.results);
				});
			} else {
				callback(promiseWalk.results);
			}
		})(this, promises, callback);
	}
}

module.exports = PromiseWalk;
