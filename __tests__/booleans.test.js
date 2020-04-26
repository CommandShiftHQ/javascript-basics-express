const request = require('supertest');
const app = require('../src/app');

describe('/booleans', () => {
  describe('POST /negate', () => {
    it('returns false when passed true', done => {
      request(app)
        .post('/booleans/negate')
        .send({ value: true })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });

    it('returns true when passed false', done => {
      request(app)
        .post('/booleans/negate')
        .send({ value: false })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
        });
    });
  });

  describe('POST /truthiness', () => {
    xit('returns false when passed an empty string', done => {
      request(app)
        .post('/booleans/truthiness')
        .send({ value: '' })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });

    xit('returns false when passed 0', done => {
      request(app)
        .post('/booleans/truthiness')
        .send({ value: 0 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });

    xit('returns false when passed null', done => {
      request(app)
        .post('/booleans/truthiness')
        .send({ value: null })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });

    xit('returns true when passed a string', done => {
      request(app)
        .post('/booleans/truthiness')
        .send({ value: 'hello' })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
        });
    });

    xit('returns true when passed a number', done => {
      request(app)
        .post('/booleans/truthiness')
        .send({ value: 9 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
        });
    });
  });

  describe('GET /is-odd/{number}', () => {
    xit('returns true when passed an odd number', done => {
      request(app)
        .get('/booleans/is-odd/7')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
        });
    });

    xit('returns false when passed an even number', done => {
      request(app)
        .get('/booleans/is-odd/84')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });

    xit('errors when the value is not numeric', done => {
      request(app)
        .get('/booleans/is-odd/bicycle')
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameter must be a number.' });
          done();
        });
    });
  });

  describe('GET /{string}/starts-with/{character}', () => {
    xit('returns true when the string starts with the given character', done => {
      request(app)
        .get('/booleans/cat/starts-with/c')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: true });
          done();
        });
    });

    xit('returns false when the string does not start with the given character', done => {
      request(app)
        .get('/booleans/cat/starts-with/d')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: false });
          done();
        });
    });

    xit('errors when the second argument is not a single character', done => {
      request(app)
        .get('/booleans/cat/starts-with/cat')
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameter "character" must be a single character.' });
          done();
        });
    });
  });
});
