'use strict';

const mm = require('egg-mock');

describe('test/app/controller/home.test.js', () => {
  let app = null;
  before(() => {
    app = mm.cluster({ port: 3400 });
    return app.ready();
  });
  after(() => app.close());
  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, egg')
      .expect(200);
  });
});
