import React,{createContext, useEffect,useReducer} from 'react'
import axios from 'axios';
import reducer from '../Reducer/ProductReducer';

export const AppContext = createContext();

const API = 'https://api.pujakaitem.com/api/products'

const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    featuredProducts:[],
    isSingleLoading:false,
    singleProduct:{},
}

export const AppProvider = ({children}) => {
    const[state,dispatch] = useReducer(reducer,initialState);

    const getProducts = async (url) => {
        dispatch({type:"SET_LOADING"})
        try {
            const res = await axios.get(url);
            const products = await res.data;
            console.log(products);
            dispatch({type:"SET_API_DATA",payload:products});    
        } catch (error) {
            dispatch({type:"API_ERROR"});
        }
    }

    const getSingleProduct = async(url) =>{
        dispatch({type:"SINGLE_SET_LOADING"});
        try {
            const res = await axios.get(url);
            const singleProduct = res.data;
            console.log(singleProduct);
            dispatch({type:"SINGLE_SET_API_DATA",payload:singleProduct});
        } catch (error) {
            dispatch({type:"SINGLE_API_ERROR"})
        }
    }

    useEffect(()=>{
        getProducts(API);
    },[]);

  return(
    <AppContext.Provider value={{...state,getSingleProduct}}>
    {children}
  </AppContext.Provider>
  ) 
}
