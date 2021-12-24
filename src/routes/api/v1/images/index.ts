import { Router, Request, Response } from 'express';
import imageResize from '../../../../services/imageResize';
const imagesRoute = Router();

imagesRoute.get('/api/v1/images', (_req: Request, _res: Response): void => {
    imageResize(_req, _res);
});

export default imagesRoute;
