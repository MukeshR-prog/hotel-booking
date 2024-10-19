import React, { useState } from 'react';
import { Box, Grid, Typography, IconButton, Button, Paper, Divider } from '@mui/material';
import { RiDeleteBin6Line } from "react-icons/ri";
const initialItems = [
  { id: 1, name: 'Bill Name Here', price: 1000 },
  { id: 2, name: 'Bill Name Here', price: 1000 },
  { id: 3, name: 'Bill Name Here', price: 1000 },
  { id: 4, name: 'Bill Name Here', price: 1000 },
  { id: 5, name: 'Amenity Name here', price: 1000 },
  { id: 6, name: 'Amenity Name here', price: 1000 },
];

export default function Popupside1delete() {
  const [items, setItems] = useState(initialItems);

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Box sx={{ minWidth: 400, margin: 'auto', padding: 1 ,}}>
      <Paper  sx={{ padding: 2, borderRadius: 0,boxShadow:'none',backgroundColor:'#F8F9FB',height:'465px',display:'flex',flexDirection:'column',justifyContent:'space-between  ' }}>
        <Box>
        <Typography sx={{ fontWeight: 'bold', mb: 2,fontSize:'14px' }}>
          UNIT PRICE DETAIL
        </Typography>

        {/* List of Items */}
        {items.map((item) => (
          <Grid
            container
            key={item.id}
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 1 }}
          >
            <Grid item xs={8}>
              <Typography sx={{fontSize:'14px',fontWeight:'semibold',color:'#4E5A6B'}}>{item.name}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography sx={{ fontWeight: 'bold',fontSize:'14px',color:'#4E5A6B' }}>${item.price.toLocaleString()}</Typography>
            </Grid>
            <Grid item xs={2}>
              <IconButton sx={{fontSize:'16px',backgroundColor:'#FFECEC',color:'#FF5252', borderRadius:'5px'}} onClick={() => handleDelete(item.id)}>
                <RiDeleteBin6Line />
              </IconButton>
            </Grid>
          </Grid>
        ))}

</Box>
        {/* <Divider sx={{ my: 2 }} /> */}

        {/* Final Total */}
        <Box sx={{display:'flex',justifyContent:'space-between',color:'#091B29',backgroundColor:'#E4E8EE',padding:'7px 15px',borderRadius:'5px'}} >
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold',fontSize:'14px' }}>
            Final Total
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold',fontSize:'14px' }}>
            ${getTotal().toLocaleString()}
          </Typography>
        </Box>
      </Paper>

      {/* Update & Save Button */}
      <Button
        
        fullWidth
        sx={{ mt: 2, backgroundColor: '#5078E1', color: '#fff', fontWeight: 'bold',fontSize:'14px',textTransform:'none' }}
      >
        Update & Save
      </Button>
    </Box>
  );
}
