import React from 'react'
import { useSelector } from 'react-redux'
import { selectFavouritesLength } from '../../feature/ads/selector'
import { Button } from '../Button'

export const FavouritesBadge = () => {
  const favouritesLength = useSelector(selectFavouritesLength)
  return (
    <Button variant="primary" borderRadius={3}>
      {favouritesLength.toString()}
    </Button>
  )
}
