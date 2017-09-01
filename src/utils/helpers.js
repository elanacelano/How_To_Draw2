var axios = require("axios");

const helpers = {
	createUser: (data) =>{
		console.log(data);
		return axios.post("/create/user", data)
		.then((err, data)=>{
			if (err) throw err;
			return data;
		});
	}

}

module.exports = helpers;