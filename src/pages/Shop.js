import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import Newsletter from '../components/newsletter/Newsletter'
import Newcollection from '../components/newcollections/Newcollection'

function Shop() {
  return (
    <div>
      <Hero/>
      <Popular />
      <Offers/>
      <Newcollection/>
      <Newsletter/>
    </div>
  )
}

export default Shop