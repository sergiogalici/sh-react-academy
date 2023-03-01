import React from 'react'
import { Button } from '../Button'

export const FavouritesBadge = () => {
  const favouritesLength = 9
  return (
    <Button variant="primary" borderRadius={3}>
      {favouritesLength.toString()}
    </Button>
  )
}
