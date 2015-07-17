var NStrapModule = require('nstrap').NStrapModule,
    merge        = require('lodash.merge');

module.exports = function (options) {
  'use strict';

  var environment = new NStrapModule();

  options = merge({
    defaultEnvironment: 'development'
  }, options);

  environment
    .setName('environment')
    .setTask(function (done) {
      return done(process.env.NODE_ENV || options.defaultEnvironment);
    })
  ;

  return environment;
};