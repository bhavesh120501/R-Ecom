const FilterProductReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curVal)=>curVal.price);
      let maxPrice = Math.max(...priceArr);

      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
        filters:{...state.filters,maxPrice,price:maxPrice},
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let tempSortProduct = [...state.filterProducts];

      const sortingProducts = (a, b) => {
        if (state.sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (state.sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }

        if (state.sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (state.sorting_value === "highest") {
          return b.price - a.price;
        }
      };

      const newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filterProducts: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { allProducts } = state;
      let tempFilterProducts = [...allProducts];

      const { text, category, company,color,price } = state.filters;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((curVal) => {
          return curVal.name.toLowerCase().includes(text.toLowerCase());
        });
      }

      if (category !== "All") {
        tempFilterProducts = tempFilterProducts.filter((curVal) => {
          return curVal.category.toLowerCase() === category.toLowerCase();
        });
      }

      if (company !== "All") {
        tempFilterProducts = tempFilterProducts.filter((curVal) => {
          return curVal.company.toLowerCase() === company.toLowerCase();
        });
      }

      if (color!=="All") {
        tempFilterProducts = tempFilterProducts.filter((curVal) => {
          return curVal.colors.includes(color);
        });
      }

      if(price){
        tempFilterProducts = tempFilterProducts.filter((curVal)=>{
          return curVal.price<=price;
        })
      }

      return {
        ...state,
        filterProducts: tempFilterProducts,
      };

      case "CLEAR_FILTERS":
      return{
        ...state,
        filters:{
          text: "",
          category: "All",
          company: "All",
          color:"All",
          price:state.filters.maxPrice,
          maxPrice:state.filters.maxPrice,
          minPrice:0,      
        }
      }

    default:
      return state;
  }
};

export default FilterProductReducer;
