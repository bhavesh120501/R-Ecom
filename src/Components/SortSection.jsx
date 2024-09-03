import React, { useContext } from 'react';
import { IoGrid } from "react-icons/io5";
import { IoListOutline } from "react-icons/io5";
import { FilterProductContext } from '../context/FilterProductContext';

export const SortSection = () => {
  const { grid_view, gridView, listView, filterProducts, sorting } = useContext(FilterProductContext);

  return (
    <div className="flex md:flex-row w-full items-start md:items-center justify-between p-4 md:p-0 gap-4">
      <div className="flex gap-6">
        <div className={grid_view ? "w-8 h-8 flex items-center justify-center bg-black" : "w-8 h-8 flex items-center justify-center bg-gray-200"}>
          <button onClick={gridView}>
            <IoGrid className={grid_view ? "text-lg text-white" : "text-lg"} />
          </button>
        </div>
        <div className={!grid_view ? "w-8 h-8 flex items-center justify-center bg-black" : "w-8 h-8 flex items-center justify-center bg-gray-200"}>
          <button onClick={listView}>
            <IoListOutline className={!grid_view ? "text-xl text-white" : "text-xl"} />
          </button>
        </div>
      </div>
      <div className="">{`${filterProducts.length} Products Available`}</div>
      <div className="">
        <form action="#">
          <select className='border border-black' name="sort" id="sort" onChange={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Name(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Name(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};
