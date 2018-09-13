const request = require('supertest');
const app = require('../index.js');

describe('Test the root path', () => {
  test('It should response the GET method', done => {
    request(app)
      .get('/artists/1')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

// test('two plus two is four', () => {
//   expect(2 + 5).toBe(7);
// });

// test('object assignment', () => {
//   const data = { one: 1 };
//   data['two'] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });
