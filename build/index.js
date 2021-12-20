"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var host = 'localhost';
var port = 5000;
app.listen(port, host, function () {
    console.log("Server is running on ".concat(host, "/").concat(port));
});
app.get('/', function (request, response) {
    response.status(200).send('The Server is running OK!');
});
module.exports = app;
