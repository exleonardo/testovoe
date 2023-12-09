import React from 'react';
import './App.css';
import PrimarySearchAppBar from "./components/AppBar";
import Cart from "./components/Cart";
import Container from '@mui/material/Container';
import Basket from "./components/Basket/Basket";
import {Route , Routes} from 'react-router-dom';
import {useAppSelector} from "./state/store";

function App() {
const cart = useAppSelector(state => state.cart.cart)

  return (
    <>
      <PrimarySearchAppBar/>
      <Container maxWidth="lg" >
        <Routes>
          <Route path={'/'} element={ <div style={{display:'flex' , justifyContent:'flex-start', marginTop:'50px',flexWrap:'wrap',gap:'20px',paddingBlock:'10px',alignItems:'center'}}>
            {cart.map(cart=>{
              return <Cart desc={cart.desc} title={cart.title} price={cart.price} id={cart.id} />
            })}
          </div>}/>
          <Route path={'/cart'} element={ <Basket/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
