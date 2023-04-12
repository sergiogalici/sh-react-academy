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
  const ad = useSelector(selectMappedAdDetail)
  const dispatch = useDispatch()
  console.log('id', id)
  console.log('ad in adDetail = ', ad)

  useEffect(() => {
    if (!id) return
    dispatch(adsActions.fetchAdDetailRequested(id))
  }, [dispatch, id])

  return ad ? <DetailCard ad={ad} /> : <Text>Oggetto non trovato</Text>
}
