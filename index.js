var express = require('express');
var app = express();

console.log("Tes1et Server Started");

app.get('/',function(req,res) {
  res.send("Hedddddddddddddllo World\n");
});

app.listen(4000);
