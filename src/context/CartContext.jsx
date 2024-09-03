import React, { createContext, useEffect, useReducer } from 'react'
import reducer from '../Reducer/CartReducer';

export const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("myCart");
  if (localCartData) {
    try {
      return JSON.parse(localCartData);
    } catch (error) {
      console.error("Failed to parse local cart data:", error);
      return [];
    }
  } else {
    return [];
  }
}

const initialState={
    cart:getLocalCartData(),
    totalItem:"",
    totalAmount:"",
    shippingFee:50000,
}

export const CartContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);

    const addToCart = (id,color,amount,data) => {
        dispatch({type:"ADD_TO_CART",payload:{id,color,amount,data}});
    }

    const setIncrease = (id) =>{
      dispatch({type:"INCREMENT",payload:id});
    }

    const setDecrease = (id) =>{
      dispatch({type:"DECREMENT",payload:id});
    }


    const removeItem = (id) =>{
      dispatch({type:"REMOVE_ITEM",payload:id});
    }

    const clearCart = () =>{
      dispatch({type:"CLEAR_CART"});
    }

    useEffect(()=>{
      dispatch({type:"UPDATE_CART_ITEMS"});
      dispatch({type:"UPDATE_CART_AMOUNT"});
      localStorage.setItem("myCart",JSON.stringify(state.cart))
    },[state.cart]);

  return (
    <CartContext.Provider value={{...state,addToCart,removeItem,clearCart,setIncrease,setDecrease}}>
        {children}
    </CartContext.Provider>
  )
}
