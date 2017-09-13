var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var app = express();
var cheerio = require("cheerio");

//clear pre-flight issues between client & server
app.all("*",function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, content-type, Authorization");
  next();
});


app.use(bodyParser.json({}));
app.use(bodyParser.json({ type: "application/vnd.api+json"}));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
	app.use(express.static(__dirname + "/build/"));
	res.sendFile(__dirname + "/build/index.html");
})





app.get("/DrawingVideos", function(req, res) {
	app.use(express.static(__dirname + "/build/"));
	res.sendFile(__dirname + "/build/index.html");
})


app.post("*", function(req, res){
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



















var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("App listening on PORT: " + port);
});















