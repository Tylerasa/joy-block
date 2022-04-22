var express = require("express");
var app = express();
var cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/trends", (req, res) => {
  var config = {
    method: "get",
    url: "https://api.twitter.com/1.1/trends/place.json?id=23424824",
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_ACCESS_TOKEN}`,
      "access-control-allow-origin": "*"
    }
  };

  axios(config)
    .then(function(response) {
      console.log(JSON.stringify(response.data));
      res.json(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.listen("5000", () => {
  console.log("listening");
});
