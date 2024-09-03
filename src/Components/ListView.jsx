import React from 'react';
import { ProductListAll } from './ProductListAll';

export const ListView = ({ filterProducts }) => {
  return (
    <div className="flex flex-wrap w-full justify-start items-center">
      {filterProducts.map((curVal) => (
        <ProductListAll key={curVal.id} {...curVal} />
      ))}
    </div>
  );
};
