import { createSlice , PayloadAction} from "@reduxjs/toolkit";

type CartItem = {
  title:string,
  id:string,
  price:500,
  desc:string
}
type CartSlice = {
  shopItem:number;
  buyItemId:{
    [key:string]:number
  };
  cart:CartItem[]
}
const cartItem = [{title:'First title',id:"1",price:500,desc:'item 1'},{title:'Second title',id:"2",price:1000,desc:'item 2'},{title:'Third title',id:"3",price:1500,desc:'item 3'},{title:'Fourth title',id:"4",price:2000,desc:'item 4'}]

const slice = createSlice({
  name:'cart',
  initialState:{
    shopItem:0,
    buyItemId:{

    },
    cart:cartItem
  } as CartSlice,
  reducers:{
    setNewShop(state,action:PayloadAction<{value:number}>){
      state.shopItem = state.shopItem+action.payload.value
},
    addToBuy(state,action:PayloadAction<{ id: string }>){
      state.buyItemId[action.payload.id] = 1
    },
    addMoreToCart(state,action:PayloadAction<{id:string,value:number}>){
      state.buyItemId[action.payload.id]= action.payload.value
    },
    removeItemFromCart(state,action:PayloadAction<{id:string}>){
      delete state.buyItemId[action.payload.id]
    }
  },
})
export const cartReducer = slice.reducer
export const  { setNewShop,addToBuy,addMoreToCart,removeItemFromCart } = slice.actions
