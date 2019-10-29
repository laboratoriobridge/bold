const reqDemos = require.context('./', true, /\.demo.tsx$/)
const reqSource = require.context('!!raw-loader!./', true, /\.demo.tsx$/)

export interface Demo {
  Component: React.ReactType
  source: string
}

const demos = reqDemos.keys().reduce(
  (map, file) => {
    return {
      ...map,
      [file]: {
        Component: reqDemos(file).default,
        source: reqSource(file).default,
      },
    }
  },
  {} as { [key: string]: Demo }
)

export default demos
