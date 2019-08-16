import React from 'react'

import { Cell, Grid, Icon, Link, Text, VFlow } from '../../../lib'

function Accessibility() {
  return (
    <VFlow>
      <h1>Accessibility</h1>
      <Text component='p' fontSize={1}>
        Web accessibility is gaining more and more space in the context of software development. Given the collaborative
        nature of the web and its importance in the process of facilitating communication, we must ensure access to
        information and <b>provide the same experience to all users</b>, regardless of their physical and cognitive
        abilities or the platform and technologies used.
      </Text>
      <blockquote>
        Disability is not just a health problem. It is a complex phenomenon, reflecting the interaction between the
        characteristics of a person's body and the characteristics of the society in which they live. – World Health
        Organization
      </blockquote>
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
      So our goal is to build inclusive digital products to enhance the experience of all users. Accessibility means
      making people independent and ensuring they can complete their tasks in a similar effort and time as someone that
      does not have a disability.
      <Grid>
        <Cell>
          <img width={96} src='/static/image/diamond.svg' alt='Sketch icon' />
        </Cell>
        <Cell>
          <VFlow vSpacing={0.5}>
            <div>
              <Text component='p' fontWeight='bold' fontSize={1}>
                Bold Design Kit
              </Text>
              <Text component='p' fontSize={1}>
                Sketch symbols, visual styles and patterns.
              </Text>
            </div>
          </VFlow>
        </Cell>
      </Grid>
    </VFlow>
  )
}

export default Accessibility
