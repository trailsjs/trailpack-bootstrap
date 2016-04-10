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

## Config

```js
// config/bootstrap.js
module.exports = function(app){

}
```

## License
[MIT](https://github.com/trailsjs/trailpack-bootstrap/blob/master/LICENSE)
