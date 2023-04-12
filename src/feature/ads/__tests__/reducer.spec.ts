import { adsReducer, adsActions } from '../reducer'

describe('test ads reducer', () => {
  it('returns the initial state when there is no state', () => {
    expect(adsReducer(undefined, { type: undefined })).toEqual({
      allAds: [],
      filterData: { filter: 'created_at', order: 'ASC' },
      adDetail: null,
      favourites: []
    })
  })

  it('should save allAds when fetchAdsSuccess is dispatched', () => {
    const currentState = {
      allAds: [],
      filterData: { filter: 'created_at', order: 'ASC' },
      adDetail: null,
      favourites: []
    }
    const expected = {
      allAds: [
        { id: '1', title: 'Ad2' },
        { id: '2', title: 'Ad2' }
      ],
      filterData: { filter: 'created_at', order: 'ASC' },
      adDetail: null,
      favourites: []
    }
    expect(
      adsReducer(
        // @ts-ignore
        currentState,
        adsActions.fetchAdsSuccess([
          // @ts-ignore
          { id: '1', title: 'Ad2' },
          // @ts-ignore
          { id: '2', title: 'Ad2' }
        ])
      )
    ).toEqual(expected)
  })

  it('should override allAds when fetchAdsSuccess is dispatched', () => {
    const currentState = {
      allAds: [{ id: '0', title: 'Ad0' }],
      filterData: { filter: 'created_at', order: 'ASC' },
      adDetail: null,
      favourites: []
    }
    const expected = {
      allAds: [
        { id: '1', title: 'Ad2' },
        { id: '2', title: 'Ad2' }
      ],
      filterData: { filter: 'created_at', order: 'ASC' },
      adDetail: null,
      favourites: []
    }
    expect(
      adsReducer(
        // @ts-ignore
        currentState,
        adsActions.fetchAdsSuccess([
          // @ts-ignore
          { id: '1', title: 'Ad2' },
          // @ts-ignore
          { id: '2', title: 'Ad2' }
        ])
      )
    ).toEqual(expected)
  })
})
