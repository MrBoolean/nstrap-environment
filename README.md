`nstrap-environment`
====================
This `nstrap` modules provides the current environment using `process.env.NODE_ENV`. Optionally you can pass options to define the default environment.

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