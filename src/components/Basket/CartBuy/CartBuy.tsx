import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import leo from "../../../images/licensed.jpg";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {useAppDispatch , useAppSelector} from "../../../state/store";
import {addMoreToCart , removeItemFromCart , setNewShop} from "../../../state/cartReducer";
type Props ={
  title:string,
  id:string,
  price:number,
  desc:string
}
const CartBuy = ({id,desc,title  }:Props) => {
  const buyItemId = useAppSelector(state => state.cart.buyItemId[id])
  const dispatch = useAppDispatch()
  const onButtonClickAddItem = ()=>{
    dispatch(addMoreToCart({id,value:buyItemId+1}))
  }
  const onButtonClickRemoveItem = ()=>{
    dispatch(addMoreToCart({id,value:buyItemId-1}))
  }
if(buyItemId<1){
  dispatch(removeItemFromCart( { id }))
  dispatch(setNewShop({value:-1}))
}
  return (

      <Card sx={{ minWidth: 500 }} style={{marginBottom:'15px' }}>
        <div style={{ display: 'flex' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            src={leo}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={onButtonClickRemoveItem}>-</Button>
            {buyItemId}
            <Button size="small" onClick={onButtonClickAddItem}>+</Button>
          </CardActions>
        </div>
      </Card>

  );
};

export default CartBuy;