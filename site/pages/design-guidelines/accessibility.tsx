import React from 'react'

import { Cell, Icon, Link, Text, VFlow, Theme, useStyles, HFlow } from '../../../lib'
import { color } from '@storybook/addon-knobs'

function Accessibility() {
  const { classes } = useStyles(createStyles)

  return (
    <VFlow vSpacing={2}>
      <h1>Accessibility</h1>
      <div>
        <Text component='p' fontSize={1}>
          Web accessibility is gaining more and more space in the context of software development. Given the
          collaborative nature of the web and its importance in the process of facilitating communication, we must
          ensure access to information and <b>provide the same experience to all users</b>, regardless of their physical
          and cognitive abilities or the platform and technologies used.
        </Text>
      </div>

      <blockquote className={classes.blockquote} cite='World Health Organization'>
        <p>
          Disability is not just a health problem. It is a complex phenomenon, reflecting the interaction between the
          characteristics of a person's body and the characteristics of the society in which they live.
        </p>
      </blockquote>

      <div>
        <VFlow>
          <h2>Not convinced yet?</h2>
          <Text component='p' fontSize={1}>
            According to data from the{' '}
            <Link href='https://www.who.int/disabilities/world_report/2011/report.pdf' fontSize={1}>
              World Disability Report 2011
            </Link>{' '}
            <b>one billion people worldwide live with some form of disability</b> (representing 10% of the world
            population). In the Brazilian scenario, access to information is a right of every citizen guaranteed by the
            Federal Constitution. Besides that, the last{' '}
            <Link href='https://censo2010.ibge.gov.br/resultados/resumo.html' fontSize={1}>
              Census
            </Link>{' '}
            presents data indicating that <b>45.6 million people</b> (23.9% of the total population) have some kind of
            disability.
          </Text>

          <div className={classes.card}>
            <HFlow alignItems='center' hSpacing={0.25}>
              <Cell>
                <Icon icon='heartOutline' fill='primary' size={3}></Icon>
              </Cell>
              <Cell>
                <Text component='p' fontSize={1.15} color='primary'>
                  Our goal is to build inclusive digital products to enhance the experience of all users. Accessibility
                  means making people independent and ensuring they can complete their tasks in a similar effort and
                  time as someone that does not have a disability.
                </Text>
              </Cell>
            </HFlow>
          </div>
        </VFlow>
      </div>

      <div>
        <VFlow>
          <h2>Accessible components</h2>
          <div>
            <Text component='p' fontSize={1}>
              Bold components were built following the specifications of WCAG, conforming to AA level. Bold design
              system enables accessible development by providing semantically correct components, each with an
              appropriate ARIA markup so that they can be correctly identified by assistive technologies. However, it is
              important to keep in mind that the design system is only the foundation for the development of affordable
              applications. We recommend that you review and test your applications to ensure they conform to{' '}
              <Link href='https://www.w3.org/TR/WCAG20/#conformance' fontSize={1}>
                WCAG standards at the AA level.
              </Link>
            </Text>
          </div>
        </VFlow>
      </div>

      <div>
        <VFlow vSpacing={1}>
          <h2>Best practices</h2>
          <h3>Color</h3>
          <Text component='p' fontSize={1}>
            <ul>
              <li>
                Color should not be used as the only visual means of conveying information, indicating an action,
                prompting a response, or distinguishing a visual element.
              </li>
              <li>
                Limit the use of reds and greens, because it is easily confused with the more common type of color
                blindness.
              </li>
              <li>
                Plugin{' '}
                <Link href='https://www.getstark.co/' fontSize={1}>
                  Stark
                </Link>{' '}
                for Sketch, make possible to see how the mock-ups are seen by different types of color blindness.
              </li>
            </ul>
          </Text>
          <img
            src='/static/image/accessibility-color.png'
            alt='Do/Don`t: Do: Use icons to indicate error states. Don`t: Use only color to convey information'
          />

          <h3>Contrast</h3>
          <Text component='p' fontSize={1}>
            In general, text and images must meet an optimal 4.5: 1 minimum contrast (for fonts equal to or less than
            14pt), except for:
            <ul>
              <li>Large texts (18.6px or 14pt) should maintain the contrast of at least 3: 1.</li>
              <li>Decorative text /image and disabled states don’t have contrast requirements.</li>
              <li>Logos: logo or text that makes up a mark need not be within the ratio of contrast.</li>
            </ul>
            <img src='/static/image/accessibility-contrast.png' alt="Do/Don't: Contrast test on tags and buttons" />
          </Text>
          <h3>Focus</h3>

          <Text component='p' fontSize={1}>
            The component focused by the keyboard must be clearly marked, and the selection area must be clickable. By
            default, links and form elements already display the highlighted border when they receive focus from the
            keyboard. This border can be modified via CSS to enhance highlighting, but should <b>not</b> be removed. We
            use and recommend that the minimum edge thickness should be 2 px.
          </Text>
          <img src='/static/image/accessibility-focus.png' alt='Focus on button and checkbox' />
        </VFlow>
      </div>

      <div>
        <VFlow>
          <h2>Assistive technologies </h2>

          <Text component='p' fontSize={1}>
            When people start to develop with accessibility in mind, it’s a common error add focus to every element on
            the page, including text and titles. This difficult the navigation of users who can see and can hinder who
            depends on a screen reader, because these technologies already provide focus to these elements. Titles, text
            blocks, and disabled fields should **not** receive focus.
          </Text>
          <img src='/static/image/accessibility-assistivetech.png' alt='Disabled field and button' />
        </VFlow>
      </div>
    </VFlow>
  )
}

export default Accessibility

const createStyles = (theme: Theme) => ({
  card: {
    color: theme.pallete.gray.c10,
    backgroundColor: theme.pallete.primary.c90,
    //boxShadow: theme.shadows.outer[20],
    borderRadius: 4,
    maxWidth: '850px',
    margin: '1rem 0',
    padding: '0.75rem',
    border: `1px solid ${theme.pallete.primary.c40}`,
  } as React.CSSProperties,

  blockquote: {
    position: 'relative',
    p: {
      color: theme.pallete.primary.main,
      fontStyle: 'italic',
      fontSize: '1.25rem',
    },
    marginLeft: '7rem',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '-6rem',
      top: '0.75rem',
      width: 78,
      height: 2,
      borderTop: `3px solid ${theme.pallete.primary.c80}`,
    },
  } as React.CSSProperties,
})
