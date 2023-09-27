import React from 'react'
import SectionTitle from './SectionTitle'
import ProductsGrid from './ProductsGrid'

function FeaturedProducts() {
   return (
      <div className="pt-24">
         <SectionTitle text={"Featured Products"}></SectionTitle>
         <ProductsGrid />
      </div>
   )
}

export default FeaturedProducts