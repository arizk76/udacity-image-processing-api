import express = require('express');
import imagesRoute from './routes/api/v1/images/index';
import logger from './utils/logger';

const app = express();
const host = 'localhost';
const port = 5000;

app.listen(port, host, (): void => {
    console.log(`Server is running on ${host}/${port}`);
});

app.get('/', logger, (request, response) => {
    response.status(200).send('The Server is running OK!');
});
app.get('/api/v1/images', imagesRoute);

module.exports = app;
