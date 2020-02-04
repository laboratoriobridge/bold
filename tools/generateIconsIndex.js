const path = require('path')
const fs = require('fs')
const filewalker = require('./filewalker')

filewalker(path.join(__dirname, '../src/components/Icon/generated'), (err, data) => {
  if (err) {
    throw err
  }

  let writeStream = fs.WriteStream(path.join(__dirname, '../src/components/Icon/generated/types.tsx'))

  const components = []

  data
    .sort((a, b) => {
      if (a.toLowerCase() < b.toLowerCase()) {
        return -1
      }
      if (a.toLowerCase() > b.toLowerCase()) {
        return 1
      }
      return 0
    })
    .filter(file => !file.endsWith('index.tsx'))
    .map(file => {
      const fileName = file.substring(file.lastIndexOf('/') + 1, file.indexOf('.tsx'))
      components.push(fileName)
    })

  writeStream.write(`import * as Components from './'`)

  writeStream.write('\n')
  writeStream.write('\n')

  writeStream.write('export type Icons =\n')
  components.forEach(component =>
    writeStream.write(`    | '${component.substring(0, 1).toLowerCase() + component.substring(1)}'\n`)
  )

  writeStream.write('\n')

  writeStream.write('export const IconMap: {\n')
  writeStream.write('    [key in Icons]: React.ComponentType<React.SVGProps<SVGSVGElement>>\n')
  writeStream.write('} = {\n')

  components.forEach(component =>
    writeStream.write(
      `    '${component.substring(0, 1).toLowerCase() + component.substring(1)}': Components.${component},\n`
    )
  )

  writeStream.write('}')
  writeStream.write('\n')
  writeStream.end()
})
