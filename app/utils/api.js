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
	let request = _get('assets/airports.json');
	
	return request.then(response => {
		return response;
		//return _.groupBy(response, o => o.country);
	});
}

function getFlights(data) {
	let request = _get('assets/flights.json');
	
	return request.then(response => {
		return response;
	});
}

/** QPX request
 * {
  "request": {
    "slice": [
      {
        "origin": "DUB",
        "destination": "HAM",
        "date": "2017-06-12",
        "preferredCabin": "BUSINESS|COACH|FIRST"
      }
    ],
    "passengers": {
      "adultCount": 1,
      "infantInLapCount": 0,
      "infantInSeatCount": 0,
      "childCount": 1,
      "seniorCount": 1
    },
    "solutions": 10,
    "refundable": false
  }
}
 * **/

export default { 
	getAirportsList,
	getFlights
};