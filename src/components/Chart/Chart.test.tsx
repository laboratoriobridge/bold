import React from 'react'
import { render } from '@testing-library/react'
import { Chart } from './Chart'
import { SeriesType, ChartSeries } from './model'

describe('Chart Component with Outliers', () => {
  const xAxis = { domain: { init: 0, end: 5, step: 1 } }
  const yAxis = { domain: { init: 0, end: 100, step: 20 } }
  const series: ChartSeries<number>[] = [{ name: 'testSeries', data: [20, 40, 120] }]

  it('should render outlier series when outliers is set to "auto"', () => {
    const { container, queryByTestId } = render(
      <Chart
        type={SeriesType.Line}
        series={series}
        xAxis={xAxis}
        yAxis={yAxis}
        outliers='auto'
        tooltip={{ type: 'point' }}
        height={300}
      />
    )

    expect(queryByTestId('Text.outlierPoint')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render normal series without outliers when outliers is set to "expand-domain"', () => {
    const { container, queryByTestId } = render(
      <Chart
        type={SeriesType.Line}
        series={series}
        xAxis={xAxis}
        yAxis={yAxis}
        outliers='expand-domain'
        tooltip={{ type: 'point' }}
        height={400}
      />
    )

    expect(queryByTestId('Text.outlierPoint')).toBeNull()
    expect(container).toMatchSnapshot()
  })
})
