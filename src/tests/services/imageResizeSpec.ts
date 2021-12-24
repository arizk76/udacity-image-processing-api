import supertest = require('supertest');
import App = require('../../index');

const request = supertest(App);

describe('Test API endpoint responses for Image Resize', () => {
    it('Success: check the image api endpoint status is 200 ok!', async (done) => {
        const response = await request.get('/api/v1/images');
        expect(response.status).toBe(200);
        done();
    });
});
describe('Test No Filename in query URL', () => {
    it('Error: check message if filename not provided within url query parameters', async (done) => {
        const response = await request.get('/api/v1/images?width=500&height=500');
        // console.log(response);
        expect(response.text).toBe(
            'Error: Please enter valid parameters. (Example: http://localhost:5000/api/v1/images?filename=example.jpg&width=200&height=300)'
        );
        done();
    });
});
describe('Image Resize Return an jpeg image type', () => {
    it('Success: check image resize return an image/jpeg content-type', async (done) => {
        const response = await request.get('/api/v1/images?filename=icelandwaterfall.jpg&width=500&height=500');
        expect(response.header).toEqual(jasmine.objectContaining({ 'content-type': 'image/jpeg' }));
        done();
    });
});
