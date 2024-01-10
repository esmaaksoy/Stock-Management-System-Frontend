import React from 'react'
import CardFirm from '../components/CardFirm'

const Firms = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10'>
        <CardFirm/>
        <CardFirm/>
        <CardFirm/>
        <CardFirm/>
        <CardFirm/>
        <CardFirm/>
        <CardFirm/>
    </div>
 
  )
}

export default Firms