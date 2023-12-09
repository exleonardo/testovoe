import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./cartReducer";
import {TypedUseSelectorHook , useDispatch , useSelector} from "react-redux";

export const store = configureStore({
  reducer:{
    cart:cartReducer
  }
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector
export const useAppDispatch = useDispatch<AppDispatch>