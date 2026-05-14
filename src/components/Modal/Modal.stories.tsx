import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import React from 'react'
import { TextColor } from '../../styles'
import { textColorMap } from '../../styles/theme/createPallete'
import { Button } from '../Button'
import { Icons } from '../Icon'
import { IconMap } from '../Icon/generated/types'
import { Text } from '../Text'

import {
  Modal,
  ModalScroll,
  ModalSize,
  ModalBody,
  ModalFooter,
  ModalFooterButton,
  modal,
  ModalMountTarget,
  ModalSidebarPosition,
  ModalSidebar,
} from '../Modal'
import { Card } from '../Card'
import { Heading } from '../Heading'
import { Tag } from '../Tag'
import { Flow } from '../Flow'
import { ModalHeader } from './ModalHeader'

const sizes: { [key in ModalSize]: ModalSize } = {
  large: 'large',
  medium: 'medium',
  small: 'small',
  auto: 'auto',
}

const scrolls: { [key in ModalScroll]: ModalScroll } = {
  body: 'body',
  full: 'full',
}

const sidebarPositions: { [key in ModalSidebarPosition]: ModalSidebarPosition } = {
  left: 'left',
  right: 'right',
}

const icons: Icons[] = Object.keys(IconMap) as Icons[]
const iconColors: TextColor[] = Object.keys(textColorMap) as TextColor[]

export default {
  title: 'Components/Modal',
}

export const Default = () => {
  const open = boolean('open', true)
  const size = select('size', sizes, 'large')
  const scroll = select('scroll', scrolls, 'body')
  const title = text('title', 'Modal Title')
  const subtitle = text('subtitle', 'Modal Subtitle')
  const hasIcon = boolean('hasIcon', true)
  const icon = hasIcon ? select('icon', icons, 'bridge') : undefined
  const iconFill = hasIcon ? select('iconFill', iconColors, 'normal') : undefined
  const manageOverflow = boolean('manageOverflow', true)
  const closeOnBackdropClick = boolean('closeOnBackdropClick', true)
  const hasCloseButton = boolean('hasCloseButton', true)
  const onClose = action('close')

  return (
    <div>
      <p>Default</p>

      <Modal
        open={open}
        size={size}
        scroll={scroll}
        manageOverflow={manageOverflow}
        closeOnBackdropClick={closeOnBackdropClick}
        onClose={onClose}
      >
        <ModalHeader
          title={title}
          subtitle={subtitle}
          icon={iconFill ? { name: icon, fill: iconFill } : icon}
          hasCloseButton={hasCloseButton}
        />
        <ModalBody>
          <Flow direction='vertical'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie, dui id luctus commodo, nunc
              enim facilisis odio, vel hendrerit erat neque eu nisl. Donec urna felis, pharetra nec urna a, efficitur
              lobortis urna. Mauris varius purus vehicula lorem mollis, a cursus enim malesuada. Integer at congue enim.
              Nullam purus mauris, fermentum nec mattis in, cursus nec tellus. Nunc sodales orci tortor, at feugiat
              purus hendrerit a. Suspendisse potenti. Nam porta urna vitae nibh pharetra eleifend. Nullam urna eros,
              auctor vitae maximus non, feugiat eget odio. Cras venenatis, lectus eget consectetur volutpat, urna felis
              efficitur enim, vitae viverra purus risus sed purus.
            </p>
            <p>
              Aliquam placerat eget massa vel congue. Suspendisse libero erat, auctor ac tristique et, ultrices quis
              dolor. Suspendisse commodo lacinia lectus ut egestas. Cras in urna eget leo mollis luctus eu eget felis.
              Mauris vel libero vel lectus cursus placerat. Nunc non ligula urna. Aliquam id quam at quam sodales
              gravida condimentum quis eros. am dolor nisl, ullamcorper ac varius nec, vulputate sed metus. Cras lacus
              ante, dapibus facilisis risus at, varius commodo nulla. Nunc volutpat pellentesque mauris et sodales.
              Suspendisse finibus, dui at tristique mollis, felis mauris vulputate leo, sed vehicula lacus nibh ut
              dolor.
            </p>
            <p>
              Aliquam placerat eget massa vel congue. Suspendisse libero erat, auctor ac tristique et, ultrices quis
              dolor. Suspendisse commodo lacinia lectus ut egestas. Cras in urna eget leo mollis luctus eu eget felis.
              Mauris vel libero vel lectus cursus placerat. Nunc non ligula urna. Aliquam id quam at quam sodales
              gravida condimentum quis eros. am dolor nisl, ullamcorper ac varius nec, vulputate sed metus. Cras lacus
              ante, dapibus facilisis risus at, varius commodo nulla. Nunc volutpat pellentesque mauris et sodales.
              Suspendisse finibus, dui at tristique mollis, felis mauris vulputate leo, sed vehicula lacus nibh ut
              dolor.
            </p>
            <p>
              Aliquam placerat eget massa vel congue. Suspendisse libero erat, auctor ac tristique et, ultrices quis
              dolor. Suspendisse commodo lacinia lectus ut egestas. Cras in urna eget leo mollis luctus eu eget felis.
              Mauris vel libero vel lectus cursus placerat. Nunc non ligula urna. Aliquam id quam at quam sodales
              gravida condimentum quis eros. am dolor nisl, ullamcorper ac varius nec, vulputate sed metus. Cras lacus
              ante, dapibus facilisis risus at, varius commodo nulla. Nunc volutpat pellentesque mauris et sodales.
              Suspendisse finibus, dui at tristique mollis, felis mauris vulputate leo, sed vehicula lacus nibh ut
              dolor.
            </p>
            <p>
              Aliquam placerat eget massa vel congue. Suspendisse libero erat, auctor ac tristique et, ultrices quis
              dolor. Suspendisse commodo lacinia lectus ut egestas. Cras in urna eget leo mollis luctus eu eget felis.
              Mauris vel libero vel lectus cursus placerat. Nunc non ligula urna. Aliquam id quam at quam sodales
              gravida condimentum quis eros. am dolor nisl, ullamcorper ac varius nec, vulputate sed metus. Cras lacus
              ante, dapibus facilisis risus at, varius commodo nulla. Nunc volutpat pellentesque mauris et sodales.
              Suspendisse finibus, dui at tristique mollis, felis mauris vulputate leo, sed vehicula lacus nibh ut
              dolor.
            </p>
            <p>
              Aliquam placerat eget massa vel congue. Suspendisse libero erat, auctor ac tristique et, ultrices quis
              dolor. Suspendisse commodo lacinia lectus ut egestas. Cras in urna eget leo mollis luctus eu eget felis.
              Mauris vel libero vel lectus cursus placerat. Nunc non ligula urna. Aliquam id quam at quam sodales
              gravida condimentum quis eros. am dolor nisl, ullamcorper ac varius nec, vulputate sed metus. Cras lacus
              ante, dapibus facilisis risus at, varius commodo nulla. Nunc volutpat pellentesque mauris et sodales.
              Suspendisse finibus, dui at tristique mollis, felis mauris vulputate leo, sed vehicula lacus nibh ut
              dolor.
            </p>
            <p>
              Aliquam placerat eget massa vel congue. Suspendisse libero erat, auctor ac tristique et, ultrices quis
              dolor. Suspendisse commodo lacinia lectus ut egestas. Cras in urna eget leo mollis luctus eu eget felis.
              Mauris vel libero vel lectus cursus placerat. Nunc non ligula urna. Aliquam id quam at quam sodales
              gravida condimentum quis eros. am dolor nisl, ullamcorper ac varius nec, vulputate sed metus. Cras lacus
              ante, dapibus facilisis risus at, varius commodo nulla. Nunc volutpat pellentesque mauris et sodales.
              Suspendisse finibus, dui at tristique mollis, felis mauris vulputate leo, sed vehicula lacus nibh ut
              dolor.
            </p>
          </Flow>
        </ModalBody>
        <ModalFooter>
          <Flow direction='horizontal' alignItems='center' justifyContent='flex-end'>
            <ModalFooterButton onClick={action('cancel clicked')}>Cancel</ModalFooterButton>
            <ModalFooterButton kind='primary' onClick={action('save clicked')}>
              Save
            </ModalFooterButton>
          </Flow>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export const Sidebar = () => {
  const open = boolean('open', true)
  const scroll = select('scroll', scrolls, 'body')
  const position = select('sidebar position', sidebarPositions, 'left')

  return (
    <div>
      <p>Default</p>

      <Modal open={open} size='large' scroll={scroll}>
        <ModalHeader title='Modal with sidebar' subtitle='' icon='infoCircleOutline' />
        <ModalSidebar position={position}>
          <Flow direction='vertical' gap={0.5}>
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index}>
                <Flow direction='vertical' gap={0.25}>
                  <Flow direction='vertical' gap={0.25}>
                    <Flow direction='horizontal' gap={0.5} alignItems='center'>
                      <Heading level={4}>Title</Heading>
                      <Tag>Tag label</Tag>
                    </Flow>
                    <Text>Description</Text>
                  </Flow>
                </Flow>
              </Card>
            ))}
          </Flow>
        </ModalSidebar>
        <ModalBody>
          <Flow direction='vertical'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie, dui id luctus commodo, nunc
              enim facilisis odio, vel hendrerit erat neque eu nisl. Donec urna felis, pharetra nec urna a, efficitur
              lobortis urna. Mauris varius purus vehicula lorem mollis, a cursus enim malesuada. Integer at congue enim.
              Nullam purus mauris, fermentum nec mattis in, cursus nec tellus. Nunc sodales orci tortor, at feugiat
              purus hendrerit a. Suspendisse potenti. Nam porta urna vitae nibh pharetra eleifend. Nullam urna eros,
              auctor vitae maximus non, feugiat eget odio. Cras venenatis, lectus eget consectetur volutpat, urna felis
              efficitur enim, vitae viverra purus risus sed purus.
            </p>
            <p>
              Aliquam placerat eget massa vel congue. Suspendisse libero erat, auctor ac tristique et, ultrices quis
              dolor. Suspendisse commodo lacinia lectus ut egestas. Cras in urna eget leo mollis luctus eu eget felis.
              Mauris vel libero vel lectus cursus placerat. Nunc non ligula urna. Aliquam id quam at quam sodales
              gravida condimentum quis eros. am dolor nisl, ullamcorper ac varius nec, vulputate sed metus. Cras lacus
              ante, dapibus facilisis risus at, varius commodo nulla. Nunc volutpat pellentesque mauris et sodales.
              Suspendisse finibus, dui at tristique mollis, felis mauris vulputate leo, sed vehicula lacus nibh ut
              dolor.
            </p>
            <p>
              Aliquam placerat eget massa vel congue. Suspendisse libero erat, auctor ac tristique et, ultrices quis
              dolor. Suspendisse commodo lacinia lectus ut egestas. Cras in urna eget leo mollis luctus eu eget felis.
              Mauris vel libero vel lectus cursus placerat. Nunc non ligula urna. Aliquam id quam at quam sodales
              gravida condimentum quis eros. am dolor nisl, ullamcorper ac varius nec, vulputate sed metus. Cras lacus
              ante, dapibus facilisis risus at, varius commodo nulla. Nunc volutpat pellentesque mauris et sodales.
              Suspendisse finibus, dui at tristique mollis, felis mauris vulputate leo, sed vehicula lacus nibh ut
              dolor.
            </p>
          </Flow>
        </ModalBody>
        <ModalFooter>
          <Flow direction='horizontal' alignItems='center' justifyContent='flex-end'>
            <ModalFooterButton onClick={action('cancel clicked')}>Cancel</ModalFooterButton>
            <ModalFooterButton kind='primary' onClick={action('save clicked')}>
              Save
            </ModalFooterButton>
          </Flow>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export const Auto = () => (
  <div>
    <Button
      onClick={modal({
        title: 'Confirm',
        size: 'small',
        render: () => 'Are you sure?',
        actions: [
          { label: 'Cancel', onClick: action('Cancel') },
          { label: 'Ok', kind: 'primary', onClick: action('Ok') },
        ],
      })}
    >
      Auto modal
    </Button>
    <ModalMountTarget />
  </div>
)

export const ModalOverlap = () => (
  <div>
    <p>Modal Overlap</p>

    <Modal open={boolean('open', true)} size={select('main modal size', sizes, 'large')} onClose={action('close')}>
      <ModalHeader title='Modal Overlap' />
      <ModalBody>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie, dui id luctus commodo, nunc enim
          facilisis odio, vel hendrerit erat neque eu nisl. Donec urna felis, pharetra nec urna a, efficitur lobortis
          urna. Mauris varius purus vehicula lorem mollis, a cursus enim malesuada. Integer at congue enim. Nullam purus
          mauris, fermentum nec mattis in, cursus nec tellus. Nunc sodales orci tortor, at feugiat purus hendrerit a.
          Suspendisse potenti. Nam porta urna vitae nibh pharetra eleifend. Nullam urna eros, auctor vitae maximus non,
          feugiat eget odio. Cras venenatis, lectus eget consectetur volutpat, urna felis efficitur enim, vitae viverra
          purus risus sed purus.
        </p>
      </ModalBody>
      <ModalFooter>
        <Flow direction='horizontal' justifyContent='flex-end'>
          <ModalFooterButton onClick={action('cancel clicked')}>Cancel</ModalFooterButton>
          <ModalFooterButton
            kind='primary'
            onClick={modal({
              title: 'Confirm?',
              size: 'small',
              render: () => 'Confirm?',
              depthLevel: 2,
              manageOverflow: false,
              onClose: action('close'),
              actions: [
                { label: 'Cancel', onClick: action('Cancel') },
                { label: 'Ok', kind: 'primary', onClick: action('Ok') },
              ],
            })}
          >
            Open a modal that overlaps
          </ModalFooterButton>
        </Flow>
      </ModalFooter>
    </Modal>
    <ModalMountTarget />
  </div>
)
