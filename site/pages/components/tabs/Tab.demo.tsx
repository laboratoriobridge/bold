import { MemoryRouter } from 'react-router'

import { TabLink, Tabs } from '../../../../lib'

function TabEx() {
  return (
    <MemoryRouter initialEntries={['/test-1']} initialIndex={0}>
      <Tabs>
        <TabLink to='/test-1'>First item</TabLink>
        <TabLink to='/test-2'>Second item</TabLink>
        <TabLink to='/test-5' disabled>
          Disabled item
        </TabLink>
      </Tabs>
    </MemoryRouter>
  )
}

export default TabEx
