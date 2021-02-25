export const calculatePercentage = (referenceValue: number, value: number) => Math.floor((value / referenceValue) * 100)

export const generateYAxisLines = (referenceValue: number, numberOfLines: number) => {
  const linesValues: Array<number> = []
  linesValues.push(referenceValue)
  const portion = referenceValue / numberOfLines
  for (let i = numberOfLines - 1; i > 0; i--) {
    linesValues.push(Math.ceil(portion * i))
  }

  return linesValues
}
