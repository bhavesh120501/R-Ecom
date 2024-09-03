import React from 'react';
import { ProductAll } from './ProductAll';

export const GridView = ({ filterProducts }) => {
  return (
    <div className="flex flex-wrap w-full justify-start items-center">
      {filterProducts.map((curVal) => (
        <ProductAll key={curVal.id} {...curVal} />
      ))}
    </div>
  );
};
