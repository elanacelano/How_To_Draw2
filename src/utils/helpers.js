var axios = require("axios");

const helpers = {
	getPinterestFiles: function(){
		return axios.get("http://api.pinterest.com/v1/urls/count.json?callback=?")
		  .then(function (response) {
		    return response;
		  })
		  .catch(function (error) {
		    return error;
		  });
	// getYouTubeFiles: function(){
	// 	return axios.get('http://api.pinterest.com/v1/boards/')
	// 	  .then(function (response) {
	// 	    return response;
	// 	  })
	// 	  .catch(function (error) {
	// 	    return error;
	// 	  });
		}
	}
// }
// }		  

module.exports = helpers;



// http://api.pinterest.com/v1/boards/