# trailpack-bootstrap

Trailpack to run a bootstrap function when Trails server is ready.

## Usage
Load in your trailpack config.

```js
// config/main.js
module.exports = {
  // ...
  packs: [
    require('trailpack-core'),
    require('trailpack-bootstrap')
  ]
}
```
```js
// config/index.js
exports.database = require('./database')
exports.env = require('./env')
exports.footprints = require('./footprints')
exports.i18n = require('./i18n')
exports.log = require('./log')
exports.main = require('./main')
exports.policies = require('./policies')
exports.routes = require('./routes')
exports.session = require('./session')
exports.views = require('./views')
exports.web = require('./web')
exports.bootstrap = require('./bootstrap')
```

## Config

```js
// config/bootstrap.js
module.exports = function(app){

}
```

## License
[MIT](https://github.com/trailsjs/trailpack-bootstrap/blob/master/LICENSE)
