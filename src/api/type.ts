export type AdDto = {
  id: string
  title: string
  description: string
  authorId: string
  categoryIds: string[]
  price: Price
  images: string[]
  premium: boolean
  hidden: boolean
  countryId: string
  created_at: number
  updated_at: number
}

export type CountryDto = {
  name: string
  id: string
  created_at: number
  updated_at: number
}

export type CategoryDto = {
  title: string
  id: string
  created_at: number
  updated_at: number
}

export type UserDto = {
  username: string
  email: string
  rating: number
  id: string
  created_at: number
  updated_at: number
}

export type CurrencyRatesDto = {
  time_last_update_unix: number
  time_next_update_unix: number
  base_code: string
  rates: Record<string, number>
}

export type Price = {
  value: number
  currency: RatesKeys
}

export type RatesKeys = 'EUR' | 'GBP' | 'USD' | 'JPY'
