import { RootState } from 'feature/store'
import {
  selectMappedAdDetail,
  selectFavouritesLength,
  makeSelectAdsInFavourites,
  makeSelectFilteredAds
} from '../selector'

describe('test selectMappedAdDetail', () => {
  it('returns the length of favourite ads', () => {
    const currentState = {
      ads: {
        allAds: [],
        filterData: { filter: 'created_at', order: 'ASC' },
        adDetail: null,
        favourites: [{}, {}, {}]
      },
      users: { allUsers: [] },
      categories: { allCategories: [] }
    } as unknown as RootState

    expect(selectFavouritesLength(currentState)).toEqual(3)
  })

  it('returns null when there is no ad detail', () => {
    const currentState = {
      ads: {
        allAds: [],
        filterData: { filter: 'created_at', order: 'ASC' },
        adDetail: null,
        favourites: []
      },
      users: { allUsers: [] },
      categories: { allCategories: [] }
    } as unknown as RootState

    expect(selectMappedAdDetail(currentState)).toBeNull()
  })

  it('returns the correct mapped ad', () => {
    const currentState = {
      ads: {
        allAds: [],
        filterData: { filter: 'created_at', order: 'ASC' },
        adDetail: {
          id: '1',
          title: '2',
          description: '3',
          authorId: '4',
          categoryIds: ['5'],
          price: {
            value: 1,
            currency: 'EUR'
          },
          images: ['6'],
          premium: false,
          hidden: false,
          countryId: '7',
          created_at: 8,
          updated_at: 9
        },
        favourites: []
      },
      users: {
        allUsers: [
          {
            username: 'mario',
            email: 'mario@email',
            rating: 5,
            id: '4',
            created_at: 5,
            updated_at: 6
          }
        ]
      },
      categories: {
        allCategories: [
          {
            title: 'cat',
            id: '5',
            created_at: 6,
            updated_at: 7
          }
        ]
      }
    } as unknown as RootState

    const expected = {
      id: '1',
      title: '2',
      description: '3',
      author: {
        username: 'mario',
        email: 'mario@email',
        rating: 5,
        id: '4',
        created_at: 5,
        updated_at: 6
      },
      category: {
        title: 'cat',
        id: '5',
        created_at: 6,
        updated_at: 7
      },
      price: {
        value: 1,
        currency: 'EUR'
      },
      images: ['6'],
      premium: false,
      hidden: false,
      countryId: '7',
      created_at: 8,
      updated_at: 9
    }

    expect(selectMappedAdDetail(currentState)).toEqual(expected)
  })

  it('expects to find an item if present in favourites', () => {
    const currentState = {
      ads: {
        allAds: [],
        filterData: { filter: 'created_at', order: 'ASC' },
        adDetail: null,
        favourites: [{ id: '1' }]
      },
      users: { allUsers: [] },
      categories: { allCategories: [] }
    } as unknown as RootState

    expect(makeSelectAdsInFavourites('1')(currentState)).toEqual(true)
  })
})

describe('test makeSelectFilteredAds', () => {
  it('returns ads filtered by category', () => {
    const expected = [
      {
        id: '1',
        title: '2',
        description: '3',
        author: {
          username: 'mario',
          email: 'mario@email',
          rating: 5,
          id: '1',
          created_at: 5,
          updated_at: 6
        },
        category: {
          title: 'cat1',
          id: '1',
          created_at: 6,
          updated_at: 7
        },
        price: {
          value: 1,
          currency: 'EUR'
        },
        images: ['6'],
        premium: false,
        hidden: false,
        countryId: '7',
        created_at: 8,
        updated_at: 9
      }
    ]

    const currentState = {
      ads: {
        allAds: [
          {
            id: '1',
            title: '2',
            description: '3',
            authorId: [1],
            categoryIds: [1],
            price: {
              value: 1,
              currency: 'EUR'
            },
            images: ['6'],
            premium: false,
            hidden: false,
            countryId: '7',
            created_at: 8,
            updated_at: 9
          },
          {
            id: '2',
            title: '2',
            description: '3',
            authorId: [2],
            categoryIds: [2],
            price: {
              value: 1,
              currency: 'EUR'
            },
            images: ['6'],
            premium: false,
            hidden: false,
            countryId: '7',
            created_at: 8,
            updated_at: 9
          }
        ],
        filterData: { filter: 'created_at', order: 'ASC' },
        adDetail: null,
        favourites: [{ id: '1' }]
      },
      users: {
        allUsers: [
          {
            username: 'mario',
            email: 'mario@email',
            rating: 5,
            id: '1',
            created_at: 5,
            updated_at: 6
          },
          {
            username: 'maria',
            email: 'maria@email',
            rating: 5,
            id: '2',
            created_at: 5,
            updated_at: 6
          }
        ]
      },
      categories: {
        allCategories: [
          {
            title: 'cat1',
            id: '1',
            created_at: 6,
            updated_at: 7
          },
          {
            title: 'cat2',
            id: '2',
            created_at: 6,
            updated_at: 7
          }
        ]
      }
    } as unknown as RootState

    expect(makeSelectFilteredAds('cat1')(currentState)).toEqual(expected)
  })
})
