const parse = require('react-docgen-typescript').parse
const filewalker = require('./filewalker')
const path = require('path')
const fs = require('fs')

filewalker(path.join(__dirname, '../src/components'), (err, data) => {
    if (err) {
        throw err
    }

    console.log('Gerando propTypes...')

    let writeStream = fs.createWriteStream(path.join(__dirname, '../src/propTypes.ts'))

    writeStream.write(`/* tslint:disable */\n`)
    writeStream.write(`import { ComponentDoc } from 'react-docgen-typescript/lib/parser'

const propTypes: {[key in string]: ComponentDoc} = {`)

    data.sort((a, b) => {
        if (a < b) { return -1 }
        if (a > b) { return 1 }
        return 0
    }).map(file => {
        if (!file.endsWith('js')
            && !file.endsWith('jsx')
            && !file.endsWith('.test.tsx')
            && !file.endsWith('.snap')
            && !file.endsWith('index.ts')
            && !file.endsWith('.stories.tsx')) {
            parse(file).map(doc => {
                // ignora funções encontradas
                if (doc.displayName.substring(0, 1) !== doc.displayName.substring(0, 1).toLowerCase()) {
                    writeStream.write(`
    '${doc.displayName}': {
        displayName: '${doc.displayName}',
        description: \`${doc.description}\`,
        props: {${Object.keys(doc.props).map(prop => `
            '${prop}': {
                name: '${prop}',
                defaultValue: \`${doc.props[prop].defaultValue
                            && doc.props[prop].defaultValue.value.replace(/\'/g, '\\`')}\`,
                description: \`${doc.props[prop].description.replace(/\`/g, '\\`')}\`,
                required: ${doc.props[prop].required},
                type: {
                    name: '${doc.props[prop].type.name}',
                    value: '${doc.props[prop].type.value}',
                }
            }`)}
        }
    },`)
                }
            })
        }
    })

    writeStream.write(`
}

export default propTypes
`)

    writeStream.end()
})
