const commentParser = require('comment-parser')
const through = require('through2')
const path = require('path')

const Concat = require('concat-with-sourcemaps')

const pluginName = 'gulp-comments-to-md'

module.exports = function (fileName) {
  if (!fileName || typeof fileName !== 'string') {
    throw new Error(`${pluginName}: please define *.md file name`)
  }

  let latestFile
  let latestMod
  let concat = new Concat(false, fileName, '\n')

  function bundleFiles (file, enc, callback) {
    if (file.isNull()) {
      callback()
      return
    }

    if (file.isStream()) {
      this.emit('error', new Error(`${pluginName}: streaming not supported`))
      callback()
      return
    }

    const commentsArray = commentParser(file.contents.toString())
    let condensed = ''
    commentsArray.forEach(commentObj => {
      condensed += commentObj.source
    })

    if (condensed.length > 0) {
      file.contents = Buffer.from(condensed + '\n', 'utf-8')

      if (!latestMod || (file.stat && file.stat.mtime > latestMod)) {
        latestFile = file
        latestMod = file.stat && file.stat.mtime
      }

      concat.add(file.relative, file.contents)
    }
    callback()
  }

  function onEnd (callback) {
    if (!latestFile) {
      callback()
      return
    }

    const concatedFile = latestFile.clone({ contents: false })
    concatedFile.path = path.join(latestFile.base, fileName)
    concatedFile.contents = concat.content

    this.push(concatedFile)
    callback()
  }

  return through.obj(bundleFiles, onEnd)
}
