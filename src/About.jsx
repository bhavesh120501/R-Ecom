import React from 'react'
import { Nav } from './Components/Nav'
import { HeroSection } from './Components/HeroSection'

export const About = () => {
  const data={
    name:"My Ecom"
  }
  return (
    <div className='container mx-auto p-4'>
    <HeroSection myData={data}/>
    </div>
  )
}
