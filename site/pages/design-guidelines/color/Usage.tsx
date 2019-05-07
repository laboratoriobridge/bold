import { VFlow, Heading } from '../../../../lib'

function Usage() {
  return (
    <VFlow>
      <div>
        <p>
          Our color palettes were built with a focus on accessibility and ease of use. Through them, it is possible to
          build accessible components and even dark UI by inverting the color levels.
        </p>
      </div>
      <div>
        <Heading level={2}>Consistency</Heading>
        <p>
          It is possible to change the primary color of the components by keeping the contrast proportion because all
          the scales were built with similar amounts of brightness on each level.
        </p>
        <img src='/static/image/color-consistency.svg' alt='Color consistency on buttons: Same level of brightness' />
      </div>
      <div>
        <Heading level={2}>Accessibility</Heading>
        <p>
          The scales are divided into 10 levels: the colors from 10 to 40 have a contrasting warranty of > 4.5:1 in
          white backgrounds, while the ones from 70 to 100 have the same warranty in dark backgrounds. In this way, our
          components respect the adequate contrast proportions for textual and interactive elements and non-interactive
          elements, in accordance with any palette.
        </p>
        <img src='/static/image/color-contrast.svg' alt='Color contrast ratios' />
      </div>
      <div>
        <Heading level={2}>Dark UI</Heading>
        <p>
          All the palettes were built to work in an inverted way. In order to apply the dark mode just invert the colors
          from the center of the scale, what is 50 becomes 60, what is 40 becomes 70, and so it goes. For a practical
          example, just click the lamp on our header!
        </p>
        <img src='/static/image/color-contrast.svg' alt='Inverted gray scale' />
      </div>
    </VFlow>
  )
}

export default Usage
