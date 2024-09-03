import React, { useContext } from 'react';
import { ProductList } from './Components/ProductList';
import { SortSection } from './Components/SortSection';
import { FilterSection } from './Components/FilterSection';
import { FilterProductContext } from './context/FilterProductContext';

export const Products = () => {
  const { filterProducts } = useContext(FilterProductContext);

  return (
    <div className="container mx-auto mt-20 max-w-screen-lg p-4">
      <div className="flex flex-col md:flex-row gap-4 md:gap-28">
        <FilterSection />
        <div className="flex flex-col w-full gap-4">
          <SortSection />
          <ProductList />
        </div>
      </div>
    </div>
  );
};
