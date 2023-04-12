import { createChartData } from '../charts'

describe('test createChartData()', () => {
  it("returns the correct data for type 'bar'", () => {
    const expected = [
      { label: '1', value: 101 },
      { label: '2', value: 102 },
      { label: '3', value: 103 },
      { label: '4', value: 104 },
      { label: '5', value: 105 }
    ]
    expect(createChartData('bar', [1, 2, 3, 4, 5])).toEqual(expected)
  })

  it('returns the correct data for all the other types', () => {
    const expected = [
      { value: 101 },
      { value: 102 },
      { value: 103 },
      { value: 104 },
      { value: 105 }
    ]
    expect(createChartData('line', [1, 2, 3, 4, 5])).toEqual(expected)
  })
})
