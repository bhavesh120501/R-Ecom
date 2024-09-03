const ProductReducer = (state,action) => {
    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };

      case "SET_API_DATA":
        const featuredData = action.payload.filter((curVal) => {
          return curVal.featured === true;
        });

        return {
          ...state,
          isLoading: false,
          products: action.payload,
          featuredProducts: featuredData,
        };

      case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };

      case "SINGLE_SET_LOADING":
        return {
          ...state,
          isSingleLoading: true,
        };

      case "SINGLE_SET_API_DATA":
        return {
          ...state,
          isSingleLoading: false,
          singleProduct: action.payload,
        };

      case "SINGLE_API_ERROR":
        return {
          ...state,
          isSingleLoading: false,
          isError: true,
        };

      default:
        return state;
    }
}

export default ProductReducer;
