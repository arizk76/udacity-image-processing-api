import express from 'express';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imageResize = async (request: express.Request, response: express.Response): Promise<void> => {
    //Check for correct url parameters.
    if (
        request.query.filename === undefined ||
        request.query.width === undefined ||
        request.query.height === undefined
    ) {
        response.send(
            `Error: Please enter valid parameters. (Example: http://localhost:5000/api/v1/images?filename=example.jpg&width=200&height=300)`
        );
        return;
    }
    const imageFileName = request.query.filename as string;
    const imageWidth = parseInt(request.query.width as string);
    const imageHeight = parseInt(request.query.height as string);
    const sourceImagePathLoc: string = path.join(`${__dirname}../../../images/full/${imageFileName}`);
    const resizedImageFileName = `thumb_${imageWidth}_${imageHeight}_${imageFileName}`;
    const resizedImageDirectory: string = path.join(`${__dirname}../../../images/thumb/`);
    const resizedImagePathLoc: string = resizedImageDirectory + resizedImageFileName;

    if (isNaN(imageWidth) || isNaN(imageHeight)) {
        response.send(
            `Error: Please enter valid number for width and height parameters (Example: width=150&height=300)`
        );
        return;
    }

    try {
        // Check if requested image file already resized before
        try {
            fs.accessSync(resizedImagePathLoc, fs.constants.F_OK);
            console.log(`Info: Resized Image file already cached at thumb folder`);
            response.sendFile(resizedImagePathLoc);
            console.log(`Success: Resized Image sent successfully !`);
            return;
        } catch (error) {
            console.log(
                `Info: No image file cached for ${imageFileName} with ${imageWidth}px width and ${imageHeight}px height.`
            );
        }
        // Check if requested image file to be resized ia available in full directory
        try {
            fs.accessSync(sourceImagePathLoc, fs.constants.F_OK);
            console.log(`Info: Source image file available`);
        } catch (error) {
            response.send(`Error: Requested image file is not available in full dir`);
            return;
        }

        // Check for distention directory and create thumb folder if it doesn't exist before resize process starts
        try {
            fs.accessSync(resizedImageDirectory, fs.constants.F_OK);
            console.log(`Info: Thumb folder found`);
        } catch (err) {
            try {
                fs.mkdirSync(resizedImageDirectory);
                console.log(`Success: Thumb folder created successfully`);
            } catch (err) {
                response.send(`Error: Failed to create thumb directory`);
                return;
            }
        }

        // Resizing for the first time. Call sharp.
        console.log(
            `Info: Resizing process started for ${imageFileName} with ${imageWidth}px Width ${imageHeight}px Height`
        );

        await sharp(sourceImagePathLoc).resize(imageWidth, imageHeight).toFormat('jpeg').toFile(resizedImagePathLoc);
        response.sendFile(resizedImagePathLoc);
        console.log(
            `Success: Resizing process done successfully for ${imageFileName} with ${imageWidth}px Width ${imageHeight}px Height`
        );
        return;
    } catch (error) {
        console.log(error);
    }
};

export default imageResize;
