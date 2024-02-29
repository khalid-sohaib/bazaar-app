import React from 'react'
import Heading from '../../sections/Heading'
import QuickFeature from '../../sections/QuickFeature'

import PosterSection from '../../sections/PosterSection'
import BestCategoriesContainer from '../../containers/sections/BestCategories'
import BestProductsContainer from '../../containers/sections/BestProducts'

export default function Home() {
  return (
    <> 
      <Heading/>
      <QuickFeature/>
      <BestCategoriesContainer/>
      <BestProductsContainer/>
      <PosterSection/>
      
    </>
  )
}
