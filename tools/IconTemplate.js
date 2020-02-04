module.exports = function({ template }, opts, { imports, componentName, props, jsx, exports }) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] })
  return typeScriptTpl.ast`
import React from 'react'

const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx}
export default ${componentName};
`
}
