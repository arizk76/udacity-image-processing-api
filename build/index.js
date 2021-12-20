"use strict";
var express = require('express');
var app = express();
var host = 'localhost';
var port = 5000;
app.listen(port, host, function () {
    console.log("Server is running on ".concat(host, "/").concat(port));
});
