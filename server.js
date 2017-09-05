var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var User = require("./models/User");
var app = express();
var cheerio = require("cheerio");


app.use(bodyParser.json({}));
app.use(bodyParser.json({ type: "application/vnd.api+json"}));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
	app.use(express.static(__dirname + "/build/"));
	res.sendFile(__dirname + "/build/index.html");
})


app.post("/create/user", function(req, res){
	console.log(req.body);
	User.create({
		username:req.body.email,
		password:req.body.password
	}, function(err,data){
		if(err) throw err;
		console.log(data);
		return data;
	})
});























app.listen(3000);