import React, { useContext } from 'react';
import { AppContext } from '../context/ProductContext';
import { Product } from './Product';

export const FeatureProduct = () => {
  const { isLoading, featuredProducts } = useContext(AppContext);

  if (isLoading) {
    return <div>....Loading</div>;
  }

  return (
    <div className="container mx-auto w-full mt-20 mb-20">
      <div className="w-full bg-gray-100 rounded-md p-6">
        <div className="flex flex-col gap-2 mb-6 ml-4 md:ml-24 lg:ml-20">
          <h4 className="text-xs mt-4">Check Now!</h4>
          <h1 className="text-xl font-bold">Our Featured Services</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-20 items-center">
          {featuredProducts.map((curVal) => (
            <Product key={curVal.id} {...curVal} />
          ))}
        </div>
      </div>
    </div>
  );
};
