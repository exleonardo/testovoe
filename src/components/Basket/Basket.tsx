import * as React from 'react';
import Container from '@mui/material/Container';
import Buy from "./Buy/Buy";
import CartBuy from "./CartBuy/CartBuy";
import {useAppSelector} from "../../state/store";

export default function Basket() {
const cartBuy = useAppSelector(state => state.cart.buyItemId)
  const cartItem = useAppSelector(state => state.cart.cart)

  const filterCartItem = Object.keys(cartBuy)
  const newCart = cartItem.filter((cart)=>filterCartItem.find(el=>el===cart.id))
  const totalPrice = newCart.reduce((acc,item)=>acc+=(item.price*cartBuy[item.id]) ,0)
  console.log (cartBuy)

  return (
    <>
    <Container maxWidth="lg">

      <div style={{display:'flex',gap:'20px',justifyContent:'space-between' }}>
        <div style={{ display: 'flex' , flexDirection: "column", marginTop:'50px' }}>
          {newCart.map(el=><CartBuy id={el.id} title={el.title} price={el.price} desc={el.desc}/>)}
        </div>
        <Buy/>
      </div>
      <div>total Price:{totalPrice}</div>
    </Container>
    </>
  );
}