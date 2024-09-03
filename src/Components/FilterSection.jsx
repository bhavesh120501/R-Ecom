import React, { useContext } from 'react';
import { FilterProductContext } from '../context/FilterProductContext';
import { FaCheck } from "react-icons/fa6";
import { ProductFormat } from '../Helper/ProductFormat';

export const FilterSection = () => {
  const { updateFilterValue, filters: { text, color, price, minPrice, maxPrice, company }, allProducts, category, clearFilters } = useContext(FilterProductContext);

  const getUniqueData = (data, property) => {
    let newVal = data.map((curVal) => curVal[property]);
    if (property === "colors") {
      newVal = newVal.flat();
    }
    return ["All", ...new Set(newVal)];
  };

  const categoryOnlyData = getUniqueData(allProducts, "category");
  const companyOnlyData = getUniqueData(allProducts, "company");
  const colorOnlyData = getUniqueData(allProducts, "colors");

  return (
    <div className="flex flex-col gap-6 md:items-start p-4 md:p-0">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="border border-slate-600 w-full p-2"
          type="text"
          placeholder="USERNAME"
          name="text"
          value={text}
          onChange={updateFilterValue}
          required
          autoComplete="off"
        />
      </form>
      <div className="flex flex-col gap-3 items-start">
        <p className="text-xl">Category</p>
        {categoryOnlyData.map((curVal, index) => (
          <button type='button' key={index} name='category' value={curVal} onClick={updateFilterValue}>
            {curVal}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-3 items-start">
        <p className="text-xl">Company</p>
        <form action="#">
          <select className='border border-black' name="company" value={company} id="company" onChange={updateFilterValue}>
            {companyOnlyData.map((curVal, index) => (
              <option key={index} name="company" value={curVal}>
                {curVal}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className="flex flex-col gap-3 items-start">
        <p className="text-xl">Colors</p>
        <div className="flex gap-2 items-center">
          {colorOnlyData.map((curColor, index) => (
            curColor === "All" ? (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                onClick={updateFilterValue}
              >
                All
              </button>
            ) : (
              <button
                className={`w-4 h-4 rounded-full flex items-center justify-center ${color === curColor ? "" : "opacity-50"}`}
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                onClick={updateFilterValue}
              >
                {color === curColor && <FaCheck className="text-white text-xs" />}
              </button>
            )
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 items-start">
        <p className="text-xl">Price</p>
        <p>
          <ProductFormat price={price} />
        </p>
        <input type="range" name='price' value={price} min={minPrice} max={maxPrice} onChange={updateFilterValue} />
      </div>
      <div className="w-full">
        <button className="bg-indigo-600 w-full h-10 text-white rounded-md" onClick={clearFilters}>
          CLEAR FILTERS
        </button>
      </div>
    </div>
  );
};
