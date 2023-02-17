import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContainer } from '../../components/ProductsContainer'

export const AdsByCategory = () => {
  const { category } = useParams()
  return <ProductsContainer category={category} />
}
