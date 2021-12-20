import supertest = require('supertest');
import App = require('../index');

const request = supertest(App);
describe('Test endpoint responses', () => {
    // afterAll(() => {
    //     App.close();
    // });
    it('check the api endpoint status is 200 ok!', async (done) => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
        done();
    });
});
