import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { AppContext } from './ProductContext';
import reducer from '../Reducer/FilterProductReducer';

export const FilterProductContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "All",
    company: "All",
    color:"All",
    price:0,
    maxPrice:0,
    minPrice:0,
  },
};

export const FilterProductProvider = ({ children }) => {
  const { products } = useContext(AppContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  const gridView = () => {
    dispatch({ type: "SET_GRIDVIEW" });
  };

  const listView = () => {
    dispatch({ type: "SET_LISTVIEW" });
  };

  const sorting = (e) => {
    const userValue = e.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  const updateFilterValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  const clearFilters = () =>{
    dispatch({type:"CLEAR_FILTERS"});
  }

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS", payload: state.filterProducts });
  }, [products, state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterProductContext.Provider value={{ ...state, gridView, listView, sorting, updateFilterValue,clearFilters }}>
      {children}
    </FilterProductContext.Provider>
  );
};
