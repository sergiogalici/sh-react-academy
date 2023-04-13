import { DetailCard } from 'components/DetailCard'
import { Text } from 'components/Text'
import { MappedAdsType } from 'feature/ads/model'
import { adsActions } from 'feature/ads/reducer'
import { selectMappedAdDetail } from 'feature/ads/selector'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { redirect, useParams } from 'react-router'

export const AdDetail = () => {
  const { id } = useParams()
  const mappedAd = useSelector(makeSelectMappedAd(id as keyof MappedAdsType))

  return mappedAd ? <DetailCard ad={mappedAd} /> : <Text>Oggetto non trovato</Text>
}
