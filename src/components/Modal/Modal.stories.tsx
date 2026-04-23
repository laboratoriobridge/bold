import { action } from '@storybook/addon-actions'
import React from 'react'
import { TextColor } from '../../styles'
import { textColorMap } from '../../styles/theme/createPallete'
import { Button } from '../Button'
import { Icons } from '../Icon'
import { IconMap } from '../Icon/generated/types'
import { VFlow } from '../VFlow'
import { Text } from '../Text'

import { HFlow } from '../HFlow'
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
  component: Modal,
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
    },
    scroll: {
      control: 'select',
      options: scrolls,
    },
    icon: {
      control: 'select',
      options: icons,
    },
    iconFill: {
      control: 'select',
      options: iconColors,
    },
  },
  args: {
    open: true,
    size: 'large',
    scroll: 'body',
    title: 'Modal Title',
    subtitle: 'Modal Subtitle',
    hasIcon: true,
    icon: 'bridge',
    iconFill: 'normal',
    manageOverflow: true,
    closeOnBackdropClick: true,
    hasCloseButton: true,
  },
}

export const Default = (args) => {
  const onClose = action('close')

  return (
    <div>
      <p>Default</p>

      <Modal
        open={args.open}
        size={args.size}
        scroll={args.scroll}
        manageOverflow={args.manageOverflow}
        closeOnBackdropClick={args.closeOnBackdropClick}
        onClose={onClose}
      >
        <ModalHeader
          title={args.title}
          subtitle={args.subtitle}
          icon={args.iconFill ? { name: args.icon, fill: args.iconFill } : args.icon}
          hasCloseButton={args.hasCloseButton}
        />
        <ModalBody>
          <VFlow>
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
          </VFlow>
        </ModalBody>
        <ModalFooter>
          <HFlow alignItems='center' justifyContent='flex-end'>
            <ModalFooterButton onClick={action('cancel clicked')}>Cancel</ModalFooterButton>
            <ModalFooterButton kind='primary' onClick={action('save clicked')}>
              Save
            </ModalFooterButton>
          </HFlow>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export const Sidebar = (args) => {
  return (
    <div>
      <p>Default</p>

      <Modal open={args.open} size='large' scroll={args.scroll}>
        <ModalHeader title='Modal with sidebar' subtitle='' icon='infoCircleOutline' />
        <ModalSidebar position={args.position}>
          <VFlow vSpacing={0.5}>
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index}>
                <VFlow vSpacing={0.25}>
                  <VFlow vSpacing={0.25}>
                    <HFlow hSpacing={0.5} alignItems='center'>
                      <Heading level={4}>Title</Heading>
                      <Tag>Tag label</Tag>
                    </HFlow>
                    <Text>Description</Text>
                  </VFlow>
                </VFlow>
              </Card>
            ))}
          </VFlow>
        </ModalSidebar>
        <ModalBody>
          <VFlow>
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
          </VFlow>
        </ModalBody>
        <ModalFooter>
          <HFlow alignItems='center' justifyContent='flex-end'>
            <ModalFooterButton onClick={action('cancel clicked')}>Cancel</ModalFooterButton>
            <ModalFooterButton kind='primary' onClick={action('save clicked')}>
              Save
            </ModalFooterButton>
          </HFlow>
        </ModalFooter>
      </Modal>
    </div>
  )
}

Sidebar.argTypes = {
  position: {
    control: 'select',
    options: sidebarPositions,
  },
}

Sidebar.args = {
  position: 'left',
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

export const ModalOverlap = (args) => (
  <div>
    <p>Modal Overlap</p>

    <Modal open={args.open} size={args.size} onClose={action('close')}>
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
        <HFlow justifyContent='flex-end'>
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
        </HFlow>
      </ModalFooter>
    </Modal>
    <ModalMountTarget />
  </div>
)
