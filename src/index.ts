import express = require('express');

const app = express();
const host = 'localhost';
const port = 5000;

app.listen(port, host, (): void => {
    console.log(`Server is running on ${host}/${port}`);
});
