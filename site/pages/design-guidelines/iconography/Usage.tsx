import { VFlow, Heading } from '../../../../lib'

function Usage() {
  return (
    <VFlow>
      <div>
        <Heading level={1}>Usage</Heading>
        <p>
          Icons represent objects, actions and states, and are used to communicate a message. Each icon is designed to
          be simple, friendly and reduced to its minimal form, expressing essential characteristics.
        </p>
      </div>

      <div>
        <Heading level={2}>Grid</Heading>
        <p>
          The icon grid establishes clear rules for the consistent, but flexible, positioning of the graphic elements.
        </p>
        <img src='/static/image/icn-grid.svg' alt='Icon Grid' />
      </div>

      <div>
        <Heading level={2}>Canvas size, padding and live area</Heading>
        <p>
          The icon grid establishes clear rules for the consistent, but flexible, positioning of the graphic elements.
        </p>
        <img src='/static/image/icn-canvas.svg' alt='Canvas size, padding and live area' />
      </div>

      <div>
        <Heading level={2}>Size and weight</Heading>
        <p>
          All icons are built on a 24px square with 2px of padding. System icons use a consistent stroke width of 2px,
          including curves and angles. When using icons, all touch target need to be 40px or higher. Icons of the same
          size should have the same visual weight. One icon should not look heavier or lighter than another icon of the
          same size. Glyphs or 16px icons should always be a filled icon, this assures that the icon stays legible.
        </p>
        <img src='/static/image/icn-size.svg ' />
      </div>
      <div>
        <Heading level={2}>Keyline shapes</Heading>
        <p>
          By using the core shapes based on the grid, you can maintain consistent visual proportions throughout your
          icons.
        </p>
        <img src='/static/image/icn-keyline.svg' alt='Canvas size, padding and live area' />
        <Heading level={3}>Pixel perfection</Heading>
        <p>
          To avoid distorting an icon, position icons “on pixel” by making the X and Y coordinates into integers,
          without decimals.
        </p>
        <Heading level={3}>Examples</Heading>
        <img src='/static/image/icn-pixel.svg' alt='Icon examples' />
      </div>
    </VFlow>
  )
}

export default Usage
