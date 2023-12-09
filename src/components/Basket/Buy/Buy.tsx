import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const card = (
  <React.Fragment>
   <CardContent>
     <div style={{display:'flex',flexDirection:'column'}} >
       <TextField
         style={{ marginBottom: '15px' }}
       label={'Name'}
       id="filled-helperText"
       defaultValue="Default Value"
       variant="outlined"
     />
       <TextField
         style={{ marginBottom: '15px' }}
         label={'Surname'}
         id="filled-helperText"
         defaultValue="Default Value"
         variant="outlined"
       />
       <TextField
         style={{ marginBottom: '15px' }}
         label='address'
         id="filled-helperText"
         defaultValue="Default Value"
         variant="outlined"
       /></div>

    </CardContent>
    <CardActions>
      <Button size="small" variant='contained' style={{width:'100%'}}>Order</Button>
    </CardActions>
  </React.Fragment>
);

export default function Buy() {
  return (
    <Box sx={{ minWidth: 400 }} style={{marginTop:'50px'}}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}