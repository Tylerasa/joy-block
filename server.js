var express = require("express");
var app = express();
var axios = require("axios");
const res = require("express/lib/response");
app.use("/", (req, res) => {
  var config = {
    method: "get",
    url: "https://api.twitter.com/1.1/trends/place.json?id=23424824",
    headers: {
      Authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAAH2lbAEAAAAAoTLWB0FqzBbqeueksaqNec6EfCg%3DbTjzLjgOc2nEK2qCaj95exv9l7suRHnxfrMbY2Q6d4UcE379zD",
      "access-control-allow-origin": "*"
    }
  };

  axios(config)
    .then(function(response) {
      console.log(JSON.stringify(response.data));
      res.json(response.data)
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.listen("5000", () => {
  console.log("listening");
});
