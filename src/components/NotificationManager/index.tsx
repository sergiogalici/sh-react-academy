import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectFavourites } from '../../feature/ads/selector'
import { StyledNM } from './styled'

export const NotificationManager = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const favouriteAds = useSelector(selectFavourites)

  useEffect(() => {
    console.log('we are in useEffect listening to favourite ads')
  }, [favouriteAds])

  return <StyledNM className={visible ? 'card visible' : 'card'}>Things</StyledNM>
}
