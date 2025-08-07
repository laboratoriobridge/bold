import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import React, { useState } from 'react'
import { TextColor } from '../../styles'
import { textColorMap } from '../../styles/theme/createPallete'
import { Button } from '../Button'
import { Icons } from '../Icon'
import { IconMap } from '../Icon/generated/types'
import { VFlow } from '../VFlow'
import { Switch } from '../Switch'
import { SwapMe } from '../SwapMe/SwapMe'
import { Checkbox } from '../Checkbox'
import { Alert } from '../Alert'
import { Heading } from '../Heading'
import { modal } from './auto'
import { ModalMountTarget } from './auto/ModalMountTarget'
import { Modal, ModalScroll, ModalSize } from './Modal'
import { ModalBody } from './ModalBody'
import { ModalFooter } from './ModalFooter'
import { ModalFooterButton } from './ModalFooterButton'

const sizes: { [key in ModalSize]: ModalSize } = {
  large: 'large',
  small: 'small',
  auto: 'auto',
}

const scrolls: { [key in ModalScroll]: ModalScroll } = {
  body: 'body',
  full: 'full',
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
  const hasCloseIcon = boolean('hasCloseIcon', true)
  const manageOverflow = boolean('manageOverflow', true)
  const closeOnBackdropClick = boolean('closeOnBackdropClick', true)
  const onClose = action('close')

  return (
    <div>
      <p>Default</p>

      <Modal
        open={open}
        size={size}
        scroll={scroll}
        hasCloseIcon={hasCloseIcon}
        title={title}
        subtitle={subtitle}
        icon={icon}
        iconFill={iconFill}
        manageOverflow={manageOverflow}
        closeOnBackdropClick={closeOnBackdropClick}
        onClose={onClose}
      >
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
        <ModalFooter
          primarySlot={
            <ModalFooterButton kind='primary' onClick={action('save clicked')}>
              Save
            </ModalFooterButton>
          }
          secondarySlot={<ModalFooterButton onClick={action('cancel clicked')}>Cancel</ModalFooterButton>}
          tertiarySlot={
            <ModalFooterButton kind='primary' skin='outline' onClick={action('tertiary slot button clicked')}>
              Button
            </ModalFooterButton>
          }
          complementarySlot={<Switch label='Label text' onClick={action('switch clicked')} />}
        />
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
        actions: {
          primarySlot: {
            label: 'Ok',
            kind: 'primary',
            onClick: action('Ok'),
          },
          secondarySlot: { label: 'Cancel', onClick: action('Cancel') },
        },
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

    <Modal
      title='Modal Overlap'
      open={boolean('open', true)}
      size={select('main modal size', sizes, 'large')}
      onClose={action('close')}
    >
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
      <ModalFooter
        primarySlot={
          <ModalFooterButton
            kind='primary'
            onClick={modal({
              title: 'Confirm?',
              size: 'small',
              render: () => 'Confirm?',
              depthLevel: 2,
              manageOverflow: false,
              onClose: action('close'),
              actions: {
                primarySlot: {
                  label: 'Ok',
                  kind: 'primary',
                  onClick: action('Ok'),
                },
                secondarySlot: { label: 'Cancel', onClick: action('Cancel') },
              },
            })}
          >
            Open a modal that overlaps
          </ModalFooterButton>
        }
        secondarySlot={<ModalFooterButton onClick={action('cancel clicked')}>Cancel</ModalFooterButton>}
      />
    </Modal>
    <ModalMountTarget />
  </div>
)

export const SwapSlots = () => {
  const [open, setOpen] = useState(false)

  const mainSlots = {
    swapme: (
      <SwapMe
        style={{
          height: '23rem',
        }}
      />
    ),
    text: (
      <VFlow>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie, dui id luctus commodo, nunc enim
          facilisis odio, vel hendrerit erat neque eu nisl. Donec urna felis, pharetra nec urna a, efficitur lobortis
          urna. Mauris varius purus vehicula lorem mollis, a cursus enim malesuada. Integer at congue enim. Nullam purus
          mauris, fermentum nec mattis in, cursus nec tellus. Nunc sodales orci tortor, at feugiat purus hendrerit a.
          Suspendisse potenti. Nam porta urna vitae nibh pharetra eleifend. Nullam urna eros, auctor vitae maximus non,
          feugiat eget odio. Cras venenatis, lectus eget consectetur volutpat, urna felis efficitur enim, vitae viverra
          purus risus sed purus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie, dui id luctus commodo, nunc enim
          facilisis odio, vel hendrerit erat neque eu nisl. Donec urna felis, pharetra nec urna a, efficitur lobortis
          urna. Mauris varius purus vehicula lorem mollis, a cursus enim malesuada. Integer at congue enim. Nullam purus
          mauris, fermentum nec mattis in, cursus nec tellus. Nunc sodales orci tortor, at feugiat purus hendrerit a.
          Suspendisse potenti. Nam porta urna vitae nibh pharetra eleifend. Nullam urna eros, auctor vitae maximus non,
          feugiat eget odio. Cras venenatis, lectus eget consectetur volutpat, urna felis efficitur enim, vitae viverra
          purus risus sed purus.
        </p>
      </VFlow>
    ),
  }

  const footerPreferredSlots = {
    swapme: <SwapMe />,
    button: (
      <ModalFooterButton kind='primary' onClick={action('click button')}>
        Click me
      </ModalFooterButton>
    ),
    switch: <Switch label='Label text' />,
    checkbox: <Checkbox label='Label text' />,
    alert: (
      <Alert type='warning' inline>
        Alert message
      </Alert>
    ),
  }

  const footerPreferredSlotsOptions = {
    'Swap me': 'swapme',
    Button: 'button',
    Switch: 'switch',
    Checkbox: 'checkbox',
    Alert: 'alert',
  }

  const mainSlotsOptions = {
    'Swap me': 'swapme',
    Text: 'text',
  }

  const swapMainSlot = select('Swap main slot', mainSlotsOptions, 'swapme')
  const swapPrimarySlot = select('Swap primary slot', footerPreferredSlotsOptions, 'button')
  const swapSecondarySlot = select('Swap secondary slot', footerPreferredSlotsOptions, 'swapme')
  const swapTertiarySlot = select('Swap tertiary slot', footerPreferredSlotsOptions, 'swapme')
  const swapComplementarySlot = select('Swap complementary slot', footerPreferredSlotsOptions, 'swapme')

  return (
    <VFlow>
      <VFlow vSpacing={0.25}>
        <Heading level={1}>Modal swap slots preferred values</Heading>
        <VFlow>
          <p>
            Swap slots are a flexible component that can be replaced with other components in the design system. These
            components can be predefined with preferred values if needed. Swap slots can be hidden if not in use.
          </p>
          <p>
            In the modal, there are five types of swap slots: secondary slot, tertiary slot, complementary slot, sidebar
            slot and main slot. Four of them have preferred values, except main slot, which can be fully customized by
            the user.
          </p>
          <Button kind='primary' onClick={() => setOpen(true)}>
            Open modal
          </Button>
        </VFlow>
      </VFlow>
      <Modal
        open={open}
        title='Modal swap slots preferred values'
        subtitle='Swap slots are a flexible component that can be replaced with other components in the design system. These components can be predefined with preferred values if needed. Swap slots can be hidden if not in use.'
        icon='infoCircleOutline'
        onClose={() => setOpen(false)}
      >
        <ModalBody>{mainSlots[swapMainSlot]}</ModalBody>
        <ModalFooter
          primarySlot={footerPreferredSlots[swapPrimarySlot]}
          secondarySlot={footerPreferredSlots[swapSecondarySlot]}
          tertiarySlot={footerPreferredSlots[swapTertiarySlot]}
          complementarySlot={footerPreferredSlots[swapComplementarySlot]}
        />
      </Modal>
    </VFlow>
  )
}
