const CartReducer = (state,action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let{id,color,amount,data} = action.payload;

      let existingProduct = state.cart.find((curVal) =>{
      return curVal.id===id+color;
      })

      if(existingProduct){
        let updatedCartProduct = state.cart.map((curVal)=>{
          if(curVal.id===id+color){
            let newAmount = curVal.amount + amount;
            if(newAmount>=curVal.max){
              newAmount=curVal.max;
            }
            return{
              ...curVal,
              amount : newAmount,
            }
          }
          else{
            return {
              ...curVal,
            }
          }
        })

        return{
          ...state,
          cart:updatedCartProduct,
        }

      }

      else{
        let cartData = {
          id:id+color,
          name:data.name,
          color,
          amount,
          image:data.image[0].url,
          price:data.price,
          max:data.stock,
        }
        // console.log("data:",data);  
        return{
          ...state,
          cart:[...state.cart,cartData],
        }  
      }

    case "DECREMENT":
      let decCount = state.cart.map((curVal)=>{
        if(curVal.id===action.payload){
          let decAmount = curVal.amount-1;
          if(decAmount<=0){
            decAmount = 1;
          }
          return{
            ...curVal,
            amount:decAmount,
          }
        }
        else{
          return{
            ...curVal,
          }
        }
      })
      return{
        ...state,
        cart:decCount,
      }

      case "INCREMENT":
        let incCount = state.cart.map((curVal)=>{
          if(curVal.id===action.payload){
            let incAmount = curVal.amount + 1;
            if(incAmount>=curVal.max){
              incAmount=curVal.max;
            }
            return {
              ...curVal,
              amount : incAmount,
            }
          }
          else{
            return{
              ...curVal,
            }
          }
        })
        return{
          ...state,
          cart:incCount,
        }

    case "UPDATE_CART_ITEMS":
      let updatedCartItems = state.cart.reduce((initialVal,curVal)=>{
        initialVal = initialVal + curVal.amount;
        return initialVal;
      },0)

      return {
        ...state, 
        totalItem:updatedCartItems,
      }

    case "REMOVE_ITEM":
      let updatedCartData = state.cart.filter((curVal)=>{
        return curVal.id!==action.payload;
      })

    return{
      ...state,
      cart:updatedCartData,
    }

  case "UPDATE_CART_AMOUNT":
    let updatedCartAmount = state.cart.reduce((initialVal,curVal)=>{
      initialVal=initialVal+(curVal.price*curVal.amount);
      return initialVal;
    },0)
    return {
      ...state,
      totalAmount:updatedCartAmount,
    }

    case "CLEAR_CART":
      return{
        ...state,
        cart:[],
      }

    default:
      return state;
  }
}


export default CartReducer;
