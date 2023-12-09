import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import cart from '../images/licensed.jpg'
import {useAppDispatch , useAppSelector} from "../state/store";
import {addToBuy, setNewShop} from "../state/cartReducer";

type Props = {
  title:string;
  desc:string;
  price:number;
  id:string
}
export default function Cart({desc,title,price,id}:Props) {
  const buyItemId = useAppSelector(state => state.cart.buyItemId[id])
  const dispatch =useAppDispatch()
  const onButtonClickBueItem = ()=>{
    dispatch(setNewShop({value:1}))
    dispatch(addToBuy({id}))
  }
  return (
    <Card sx={{ minWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          alt="leon"
          src={cart}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
          <Typography  variant="body2" color={'black'}>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button disabled={!!buyItemId} size="medium" color="secondary" variant={'contained'} onClick={onButtonClickBueItem}>
          {!buyItemId?'Купить':'В корзине'}
        </Button>
      </CardActions>
    </Card>
  );
}