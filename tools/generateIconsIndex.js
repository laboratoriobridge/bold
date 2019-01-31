const filewalker = require('./filewalker')
const path = require('path')
const fs = require('fs')

filewalker(path.join(__dirname, '../src/components/elements/Icon/generated'), (err, data) => {
    if (err) {
        throw err
    }

    let writeStream = fs.createWriteStream(path.join(__dirname, '../src/components/elements/Icon/generated/Icons.ts'))

    const components = []

    data.sort((a, b) => {
        if (a < b) { return -1 }
        if (a > b) { return 1 }
        return 0
    }).map(file => {
        const fileName = file.substring(file.lastIndexOf('/') + 1, file.indexOf('.tsx'))
        writeStream.write(`import { default as ${fileName} } from './${fileName}'\n`)
        components.push(fileName)
    })

    writeStream.write('\n')

    writeStream.write('export type Icons =\n')
    components.forEach(component =>
        writeStream.write(`    | '${component.substring(0, 1).toLowerCase() + component.substring(1)}'\n`))

    writeStream.write('\n')

    writeStream.write('export const IconMap = {\n')

    components.forEach(component => writeStream.write(`    '${component.substring(0, 1).toLowerCase()
        + component.substring(1)}': ${component},\n`))

    writeStream.write('}')
    writeStream.write('\n')
    writeStream.end()
})
