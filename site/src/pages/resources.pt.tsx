import { Cell, Grid, Icon, Link, Text, VFlow } from 'bold-ui'
import React from 'react'

import { ButtonLink } from '../components/ButtonLink'
import { ga } from '../components/ga'
import { PageLayout } from '../components/PageLayout'

function Resources() {
  const handleClickSketch = () => {
    ga('send', 'event', {
      eventCategory: 'Download',
      eventAction: `Sketch`,
    })
  }

  const handleClickFigma = () => {
    ga('send', 'event', {
      eventCategory: 'Download',
      eventAction: `Figma`,
    })
  }
  const handleClickSketchData = () => {
    ga('send', 'event', {
      eventCategory: 'Download',
      eventAction: `SketchData`,
    })
  }

  return (
    <PageLayout>
      <VFlow>
        <h1>Recursos</h1>
        <Text component='p' fontSize={1}>
          Aqui você pode baixar alguns dos recursos e ferramentas de design que consideramos úteis para criar
          experiências de produtos.
        </Text>

        <Grid>
          <Cell>
            <img width={96} src='/image/diamond.svg' alt='Sketch icon' />
          </Cell>
          <Cell>
            <VFlow vSpacing={0.5}>
              <div>
                <Text component='p' fontWeight='bold' fontSize={1}>
                  Bold Design Kit
                </Text>
                <Text component='p' fontSize={1}>
                  Símbolos do Sketch, estilos visuais e padrões.
                </Text>
              </div>

              <ButtonLink
                href='/Bold-1.0.sketch'
                kind='primary'
                skin='outline'
                size='small'
                onClick={handleClickSketch}
              >
                <Icon icon='download' style={{ marginRight: '0.5rem' }} />
                Baixar arquivo do Sketch
              </ButtonLink>
            </VFlow>
          </Cell>
        </Grid>

        <Grid>
          <Cell>
            <img width={96} src='/image/figma.svg' alt='Sketch icon' />
          </Cell>
          <Cell>
            <VFlow vSpacing={0.5}>
              <div>
                <Text component='p' fontWeight='bold' fontSize={1}>
                  Bold Design Kit
                </Text>
                <Text component='p' fontSize={1}>
                  Símbolos do Figma, estilos visuais e padrões.
                </Text>
              </div>

              <Link
                href='https://www.figma.com/file/TE9FUDtlgVQ4FWlAPtTagxQU/Bold-Design-System'
                fontSize={1}
                target='_blank'
                onClick={handleClickFigma}
              >
                Acesse o arquivo no Figma
              </Link>
            </VFlow>
          </Cell>
        </Grid>
        <Grid>
          <Cell>
            <VFlow vSpacing={0.5}>
              <Text component='p' fontWeight='bold' fontSize={1}>
                Sketch Data Suplies
              </Text>
              <Text component='p' fontSize={1}>
                Com o recurso de dados do Sketch, você pode adicionar rapidamente dados de texto reais aos seus designs
                e atualizá-los em um instante. Estamos compartilhando os arquivos de texto que usamos em nossos
                protótipos (em PT-BR). Eles incluem datas, endereços, nomes femininos, nomes masculinos, CPF, e-mails,
                sexo, números de telefone, entre outros.
              </Text>
              <ButtonLink
                href='/Sketch-Data-Suplies(PT-BR).zip'
                kind='primary'
                skin='outline'
                size='small'
                onClick={handleClickSketchData}
              >
                <Icon icon='download' style={{ marginRight: '0.5rem' }} />
                Baixar o Sketch Data Suplies
              </ButtonLink>
            </VFlow>
          </Cell>
        </Grid>
      </VFlow>
    </PageLayout>
  )
}

export default Resources
