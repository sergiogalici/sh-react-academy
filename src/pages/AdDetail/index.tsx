import React from 'react'
import { useSelector } from 'react-redux'
import { redirect, useParams } from 'react-router'
import { DetailCard } from '../../components/DetailCard'
import { Text } from '../../components/Text'
import { MappedAdsType } from '../../feature/ads/model'
import { makeSelectMappedAd } from '../../feature/ads/selector'

export const AdDetail = () => {
  const { id } = useParams()
  const mappedAd = useSelector(makeSelectMappedAd(id as keyof MappedAdsType))

  return mappedAd ? <DetailCard ad={mappedAd} /> : <Text>Oggetto non trovato</Text>
}
