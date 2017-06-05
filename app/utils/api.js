function _get(url) {
	return new Promise(function(resolve, reject){
		let request = new XMLHttpRequest();

		request.open('GET', url, true);
		
		request.onload = function() {
			if(request.status >= 200 && request.status < 400){
				resolve(JSON.parse(request.response));
			} else {
				reject(new Error(request.status));
			}
		};

		request.onerror = function() {
			reject(new Error("Error Fetching Results"));
		};

		request.send();
	});
}

function getAirportsList() {
	var request = _get('assets/airports.json');
	
	return request.then(response => {
		return _.groupBy(response, o => o.country);
	});
}

// FETCH API https://davidwalsh.name/fetch

export default { getAirportsList };