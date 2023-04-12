export const createChartData = (type: string, source: number[]) => {
  if (type === 'bar') {
    return source.map((x) => ({ label: x.toString(), value: x + 100 }))
  }

  return source.map((x) => ({ value: x + 100 }))
}
