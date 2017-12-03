<p align="center">
  <a href="https://github.com/SlimDogs/gulp-comments-to-md"><img src="https://github.com/SlimDogs/gulp-comments-to-md/blob/master/docs/assets/logo.png?raw=true" alt="gulp-comments-to-md logo" title="Gulp-comments-to-md repository" height="200px"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/gulp-comments-to-md" target="_blank"><img src="https://badge.fury.io/js/gulp-comments-to-md.svg" alt="gulp-comments-to-md version" title="gulp-comments-to-md version"></a>
  <a href="#" target="_blank"><img src="https://travis-ci.org/SlimDogs/gulp-comments-to-md.svg?branch=master" alt="Latest CI build status" title="Latest CI build status"></a>
  <a href="https://github.com/semantic-release/semantic-release" target="_blank"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="Semantic release" title="Semantic release"></a>
  <a href="https://greenkeeper.io" target="_blank"><img src="https://badges.greenkeeper.io/SlimDogs/gulp-comments-to-md.svg" alt="Greenkeeper" title="Greenkeeper"></a>
  <a href="https://standardjs.com" target="_blank"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide" title="Standard - JavaScript Style Guide"></a>
  <a href="http://commitizen.github.io/cz-cli" target="_blank"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen friendly" title="Commitizen friendly"></a>
  <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" title="MIT License"></a>
</p>

## Table of content
- [About](#about)
- [Installation](#installation)
- [How to use?](#how-to-use)
- [Supported comment formats](#supported-comment-formats)
- [License](#license)

## About
This gulp plugin parses comments from logic or styles files and generates a markup document file (e.g. README.md)

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

This plugin will extract comments from `file-a.scss` & `file-b.scss` and generate a new DOCUMENTATION.md (_name of the file is on you!_) file which in this case would contain:
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
1. Once installed modify your *gulpfile.js* file to include the `gulp-comments-to-md` plugin like this:
   ```js
   const commentsToDocFile = require('gulp-comments-to-md')
   ```

2. Define the task like this:
   ```js
   gulp.task('generate-documentation', () => {
     return gulp.src([
       'src/**/*.scss'
     ])
     .pipe(commentsToDocFile('README.md'))
     .pipe(gulp.dest('./'))
   })
   ```
* `['src/**/*.scss']` - change to your selected target files (_you can target all file types supporting required [comment formatting](#supported-comment-formats)_) 📌
* `README.md` - name of the generated document (_not limited to `.md`!_) 📌
* `./` - destination folder 📌

## Supported comment formats
At the moment it works perfectly with `/** ... */` comment format. Perfectly formatted comment example:
```js
/**
 * ## Animations
 * - [Float](#float)
 * - [Pulse](#pulse)
 * - [Spin](#spin)
 */

$('.btn-toggler').on('click', () => {
  $('.header').toggle()
});
```
❗ *Pay attention to the details*: each inner comment line (_including last one_) must start with space (` `) and asterisk (`*`).

## License
The repository code is open-sourced software licensed under the [MIT license](https://github.com/SlimDogs/gulp-comments-to-md/blob/master/LICENSE?raw=true).