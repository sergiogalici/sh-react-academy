import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getAdDetail, getCountries } from '../../api'
import { DetailCard } from '../../components/DetailCard'
import { MappedAd } from '../../feature/adDetail/model'
import { adActions } from '../../feature/adDetail/reducers'
import { selectMappedAd } from '../../feature/adDetail/selector'
import { countriesActions } from '../../feature/countries/reducer'

export const AdDetail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const mappedAd: MappedAd = useSelector(selectMappedAd)

  useEffect(() => {
    if (id) {
      getAdDetail(id)
        .then((data) => dispatch(adActions.fetchAdSuccess(data)))
        .catch((e) => console.log(e.message))
    }

    getCountries().then((data) => dispatch(countriesActions.fetchCountriesSuccess(data)))
  }, [dispatch, id])

  return <DetailCard ad={mappedAd} />
}
