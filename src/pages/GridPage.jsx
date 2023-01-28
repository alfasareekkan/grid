import React from 'react'
import { useLocation } from 'react-router-dom'
import Grid from '../components/Grid'

function GridPage() {
    const location = useLocation()
    console.log(location.state.products);
  return (
      <div><Grid products={location.state.products} /></div>
  )
}

export default GridPage