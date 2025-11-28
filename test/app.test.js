const request = require('supertest');
const app = require('../index'); // adapter si nécessaire

describe('GET /', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Hello World');
  });
});

