module.exports = function({ template }, opts, { imports, componentName, props, jsx, exports }) {
    const typeScriptTpl = template.smart({ plugins: ['typescript', 'tslint'] })
    return typeScriptTpl.ast`
${'/* tslint:disable */\n'}

import React from 'react'

const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx}
export default ${componentName};
`
}
