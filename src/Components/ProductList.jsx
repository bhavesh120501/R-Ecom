import React, { useContext } from 'react';
import { FilterProductContext } from '../context/FilterProductContext';
import { GridView } from './GridView';
import { ListView } from './ListView';

export const ProductList = () => {
  const { isLoading, filterProducts, grid_view } = useContext(FilterProductContext);

  if (grid_view) {
    return <GridView filterProducts={filterProducts} />;
  }

  return <ListView filterProducts={filterProducts} />;
};
