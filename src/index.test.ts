import * as Bold from './'

it('should export components to global namespace', () => {
  expect(Object.keys(Bold)).toMatchSnapshot()
})
