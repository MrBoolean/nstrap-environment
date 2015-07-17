var chai        = require('chai'),
    cap         = require('chai-as-promised'),
    NStrap      = require('nstrap').NStrap,
    environment = require('../');

chai.use(cap);
chai.should();

describe('nstrap-environment', function () {
  'use strict';

  var bootstrap;

  beforeEach(function () {
    bootstrap = new NStrap();
  });

  afterEach(function () {
    bootstrap = undefined;
  });

  it('resolves the defaultEnvironment if process.env.NODE_ENV is undefined', function (done) {
    bootstrap.add(environment({
      defaultEnvironment: 'my-special-env'
    }));

    process.nextTick(function () {
      bootstrap.get('environment').getResult().should.eventually.equal('my-special-env').and.notify(done);
    });

    bootstrap.run();
  });

  it('resolves with the current process.env.NODE_ENV', function (done) {
    process.env.NODE_ENV = 'staging';
    bootstrap.add(environment());

    process.nextTick(function () {
      bootstrap.get('environment').getResult().should.eventually.equal(process.env.NODE_ENV).and.notify(done);
    });

    bootstrap.run();
  });
});