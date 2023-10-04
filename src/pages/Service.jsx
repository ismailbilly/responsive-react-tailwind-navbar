import React from 'react'
import ServiceLeft from '../components/services/ServiceLeft'
import ServiceCard from '../components/services/ServiceCard'

const Service = () => {
  return (
      <div className='md:flex gap-7 items-center'>
          <ServiceLeft />
          <ServiceCard/>

    </div>
  )
}

export default Service