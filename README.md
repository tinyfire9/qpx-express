```js
var API = require('qpx-express');

var apiKey = 'yourApiKey';
var qpx = new API(apiKey);

var body = {
	"request": {
	    "passengers": { "adultCount": 1 },
	    "slice": [{
	        "origin": origin,
	        "destination": destination,
	        "date": departureDate // YYYY-MM-DD
	      },
	      {
	        "origin": destination,
	        "destination": origin,
	        "date": returningDate // YYYY-MM-DD
	      }
	    ]
	  }
	};

qpx.getInfo(body, function(error, data){
	console.log('Heyy!', data);
});
```
## Installation

```bash
$ npm install qpx-express
```
More details about QPX-Express? 
[`FAQ`](https://developers.google.com/qpx-express/faq)