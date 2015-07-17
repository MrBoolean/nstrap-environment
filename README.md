`nstrap-environment`
====================
This `nstrap` modules provides the current environment using `process.env.NODE_ENV`. Optionally you can pass options to define the default environment.

[![npm version](https://badge.fury.io/js/nstrap-environment.svg)](http://badge.fury.io/js/nnstrap-environment) [![Dependencies](https://david-dm.org/MrBoolean/nstrap-environment.svg)](https://travis-ci.org/MrBoolean/nstrap-environment)

## Install
```
npm i --save nstrap-environment
```

## Example
```javascript
var bootstrap = require('nstrap')();

bootstrap.add(require('nstrap-environment')({
  defaultEnvironment: 'production'
}));

bootstrap.run()
  .then(function (kernel) {
    console.log(kernel.environment); // production
  })
;
```

## Run the tests
```
gulp test
```