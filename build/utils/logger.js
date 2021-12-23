"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (_req, _res, next) {
    var url = _req.url;
    console.log("".concat(url, " was visited !"));
    next();
};
exports.default = logger;
