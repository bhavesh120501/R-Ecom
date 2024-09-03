import React from 'react';
import { HeroSection } from './Components/HeroSection';
import { Services } from './Components/Services';
import { Trusted } from './Components/Trusted';
import { FeatureProduct } from './Components/FeatureProduct';

export const Home = () => {
  const data = {
    name: "My Store"
  };
  return (
    <div className='container mx-auto p-4'>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </div>
  );
};
