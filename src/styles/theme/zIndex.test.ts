import { zIndex, zIndexLevel } from './zIndex'

it('tooltip z-index must exceed the highest modal container level', () => {
  const maxModalContainer = Math.max(...Object.values(zIndexLevel).map((z) => z.modalContainer))
  expect(zIndex.tooltip).toBeGreaterThan(maxModalContainer)
})
