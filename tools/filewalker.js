const fs = require('fs')
const path = require('path')

/**
 * Explores recursively a directory and returns all the filepaths and folderpaths in the callback.
 *
 * @see http://stackoverflow.com/a/5827895/4241030
 * @param {String} dir
 * @param {Function} done
 */
function filewalker(dir, done) {
    let results = []

    fs.readdir(dir, function (err, list) {
        if (err) return done(err)

        var pending = list.length

        if (!pending) return done(null, results)

        list.forEach(function (file) {
            file = path.resolve(dir, file)

            fs.stat(file, function (err, stat) {
                // If directory, execute a recursive call
                if (stat && stat.isDirectory()) {
                    // Add directory to array [comment if you need to remove the directories from the array]
                    // results.push(file)

                    filewalker(file, function (err, res) {
                        results = results.concat(res)
                        if (!--pending) done(null, results)
                    })
                } else {
                    results.push(file)

                    if (!--pending) done(null, results)
                }
            })
        })
    })
}

module.exports = filewalker
