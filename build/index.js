"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var index_1 = __importDefault(require("./routes/api/v1/images/index"));
var app = express();
var host = 'localhost';
var port = 5000;
app.listen(port, host, function () {
    console.log("Server is running on ".concat(host, "/").concat(port));
});
app.get('/', function (request, response) {
    response.status(200).send('The Server is running OK!');
});
app.get('/api/v1/images', index_1.default);
module.exports = app;
