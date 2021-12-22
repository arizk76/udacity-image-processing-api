import express from 'express';

const logger = (_req: express.Request, _res: express.Response, next: express.NextFunction): void => {
    const url = _req.url;
    console.log(`${url} was visited !`);
    next();
};

export default logger;
