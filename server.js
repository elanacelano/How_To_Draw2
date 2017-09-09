var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var User = require("./models/User");
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
// Scrape data from one site and place it into the mongodb db
app.get("/scrape", function(req, res) {
  // Make a request for the news section of ycombinator
  request("https://news.ycombinator.com/", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    // For each element with a "title" class
    $(".title").each(function(i, element) {
      // Save the text and href of each link enclosed in the current element
      var title = $(element).children("a").text();
      var link = $(element).children("a").attr("href");

      // If this found element had both a title and a link
      if (title && link) {
        // Insert the data in the scrapedData db
        db.scrapedData.insert({
          title: title,
          link: link
        },
        function(err, inserted) {
          if (err) {
            // Log the error if one is encountered during the query
            console.log(err);
          }
          else {
            // Otherwise, log the inserted data
            console.log(inserted);
          }
        });
      }
    });
  });

  // Send a "Scrape Complete" message to the browser
  res.send("Scrape Complete");
});


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



















app.listen(3000);