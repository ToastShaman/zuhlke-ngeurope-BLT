[![Build Status](https://secure.travis-ci.org/ToastShaman/bespoke-theme-ngeurope-blt.png?branch=master)](https://travis-ci.org/ToastShaman/bespoke-theme-ngeurope-blt)

# bespoke-theme-ngeurope-blt

A theme for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js) &mdash; [View demo](http://ToastShaman.github.io/bespoke-theme-ngeurope-blt)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/ToastShaman/bespoke-theme-ngeurope-blt/master/dist/bespoke-theme-ngeurope-blt.min.js
[max]: https://raw.github.com/ToastShaman/bespoke-theme-ngeurope-blt/master/dist/bespoke-theme-ngeurope-blt.js

## Usage

This theme is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  ngeuropeBlt = require('bespoke-theme-ngeurope-blt');

bespoke.from('#presentation', [
  ngeuropeBlt()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.themes.ngeuropeBlt()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-theme-ngeurope-blt
```

### Bower

```bash
$ bower install bespoke-theme-ngeurope-blt
```

## Credits

This theme was built with [generator-bespoketheme](https://github.com/markdalgleish/generator-bespoketheme).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
