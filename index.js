var express = require('express');
var app = express();

console.log("Test Server Started");

app.get('/',function(req,res) {
  res.send("Hedddddddddddddllo World\n");
});

app.listen(4000);
