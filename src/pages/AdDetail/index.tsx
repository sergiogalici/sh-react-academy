import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { DetailCard } from '../../components/DetailCard'
import { MappedAdsType } from '../../feature/ads/model'
import { makeSelectMappedAd } from '../../feature/ads/selector'

export const AdDetail = () => {
  const { id } = useParams()
  const mappedAd = useSelector(makeSelectMappedAd(id as keyof MappedAdsType))
  const adNotFound: MappedAdsType = {
    id: '',
    title: 'There was an error loading the requested ad',
    description: '',
    author: {
      created_at: 0,
      updated_at: 0,
      email: '',
      rating: 0,
      username: '',
      id: ''
    },
    category: { title: '', id: '', created_at: 0, updated_at: 0 },
    price: { value: 0, currency: 'EUR' },
    images: [],
    premium: false,
    hidden: false,
    countryId: '',
    created_at: 0,
    updated_at: 0
  }

  return <DetailCard ad={mappedAd ?? adNotFound} />
}
