<p align="center">
  <a href="https://github.com/SlimDogs/gulp-comments-to-md"><img src="https://github.com/SlimDogs/gulp-comments-to-md/blob/master/docs/assets/logo.png?raw=true" alt="Gulp comments to markdown document" height="200px"></a>
  <br>
  <br>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/gulp-comments-to-md"><img src="https://badge.fury.io/js/gulp-comments-to-md.svg" alt="npm version"></a>
  <a href="#" target="_blank"><img src="https://travis-ci.org/SlimDogs/gulp-comments-to-md.svg?branch=master" alt="Latest CI build status" title="Latest CI build status"></a>
  <a href="https://github.com/SlimDogs/gulp-comments-to-md" target="_blank"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="Semantic release" title="Semantic release"></a>
  <a href="https://greenkeeper.io" target="_blank"><img src="https://badges.greenkeeper.io/SlimDogs/gulp-comments-to-md.svg" alt="Greenkeeper" title="Greenkeeper"></a>
  <a href="https://standardjs.com" target="_blank"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide" title="Standard - JavaScript Style Guide"></a>
  <a href="http://commitizen.github.io/cz-cli" target="_blank"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen friendly" title="Commitizen friendly"></a>
  <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" title="MIT License"></a>
</p>

## Table of content
- [About](#about)
- [Installation](#installation)
- [How to use?](#how-to-use)
- [Supported comments](#supported-comments)
- [License](#license)

## About
This gulp plugin parses well formatted comments from files and generates a makup document file such as README.md

For example you have file `file-a.scss` with contents:
```scss
/**
 * ### Color 1
 * - `Is:` Red!
 */

.color-red {
  color: red;
}
```

And `file-b.scss` with contents:
```scss
/**
 * ### Color 2
 * - `Is:` Blue!
 */

.color-blue {
  color: blue;
}
```

With help of this plugin you extract comments from `file-a.scss` & `file-b.scss` and generate *.md file which in this case would contain:
```
### Color 1
- `Is:` Red!

### Color 2
- `Is:` Blue!
```

## Installation
* If you are using yarn run `yarn add gulp-comments-to-md --save`
* If you prefer npm run `npm install gulp-comments-to-md --save`

## How to use
Once installed moddify your gulp file to include the plugin like this:
```js
const commentsToMd = require('gulp-comments-to-md')
```

Then define the task like this:
```js
gulp.task('Generate MD document', () => {
  return gulp.src([
      'src/**/*.scss'
    ])
    .pipe(commentsToMd('README.md'))
    .pipe(gulp.dest('./'))
})
```

1. Remember to update `src/**/*.scss` to your selected source files (any file type works)
2. `README.md` - to your generated document (in theory it could be any file type)
3. `./` - to folder where you want to output generated document

## Supported comments
At the moment it works perfectly with /** */ commens, like in this example:
```scss
/**
 * ## Animations
 * - [Float](#float)
 * - [Pulse](#pulse)
 * - [Spin](#spin)
 */

@import "animations/float";
@import "animations/pulse";
@import "animations/spin";
```
Pay attention to the detail - each inner comment line (including last one) must start with space (` `) and asterisk (`*`).

## License
The repository code is open-sourced software licensed under the [MIT license](https://github.com/SlimDogs/gulp-comments-to-md/blob/master/LICENSE?raw=true).