"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imagesRoute = express_1.default.Router();
imagesRoute.get('/api/v1/images', function (_req, _res) {
    _res.send('Welcome Image API').status(200).end();
});
exports.default = imagesRoute;
