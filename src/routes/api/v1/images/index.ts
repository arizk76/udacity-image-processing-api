import express from 'express';
import imageResize from '../../../../services/imageResize';
const imagesRoute = express.Router();

imagesRoute.get('/api/v1/images', (_req, _res) => {
    imageResize(_req, _res);
});

export default imagesRoute;
