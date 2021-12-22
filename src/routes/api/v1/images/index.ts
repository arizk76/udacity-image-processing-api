import express from 'express';
const imagesRoute = express.Router();

imagesRoute.get('/api/v1/images', (_req, _res) => {
    _res.send('Welcome Image API').status(200).end();
});

export default imagesRoute;
