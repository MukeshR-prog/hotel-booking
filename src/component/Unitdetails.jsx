import React, { useState } from 'react';
import { Grid, Paper, Box, Typography, Avatar, Button, IconButton, Badge } from '@mui/material';
import Image from '../assets/estate.jpeg'; // Import your image
import bed from '../assets/bed.png';
import home from '../assets/home.png';
import bath from '../assets/bath.svg';
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import Customise from './Customize';

function Unitdetails() {
  const initialUnits = [
    {
      estate: "Jumeirah Estate",
      amount: "$ 900.00",
      description: "Jumeirah Golf Estate",
      sqfeet: "2000 Sq.Ft",
      bed: "2",
      bath: "2",
      bhk: "2BHK",
      discounted: false,
      amountColor: 'black'
    },
    {
      estate: "Jumeirah Estate",
      amount: "$ 1,200",
      description: "Jumeirah Golf Estate",
      sqfeet: "2000 Sq.Ft",
      bed: "2",
      bath: "2",
      bhk: "2BHK",
      discounted: false,
      amountColor: 'black'
    },
    {
      estate: "Jumeirah Estate",
      amount: "$ 1,200",
      description: "Jumeirah Golf Estate",
      sqfeet: "2000 Sq.Ft",
      bed: "2",
      bath: "2",
      bhk: "2BHK",
      discounted: false,
      amountColor: 'black'
    }
  ];

  const [units, setUnits] = useState(initialUnits);

  const handleAmountClick = (index) => {
    const updatedUnits = [...units];
    const unit = updatedUnits[index];

    // Toggle the color and discount status
    if (unit.amountColor === 'black') {
      unit.amountColor = 'orange';
      unit.discounted = true; // Disable the discount when clicked
    } else {
      unit.amountColor = 'black';
      unit.discounted = false; // Re-enable the discount when clicked again
    }

    setUnits(updatedUnits);
  };

  return (
    <Box sx={{ padding: '10px', height: '480px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
      <Typography sx={{ fontSize: '14px', color: '#4E5A6B',margin:'5px 0px' }}>Unit Details</Typography>
      <Grid container spacing={1} sx={{
        height: '450px', overflow: 'scroll', scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none', // For Chrome, Safari, and Opera
        },
      }}>
        {units.map((unit, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
            <Paper elevation={3} sx={{ padding: '10px', position: 'relative', borderRadius: '12px',height:'230px',display:'flex',flexDirection:'column',justifyContent:'space-between' }}>
              {/* Image and Delete button */}
              <Box sx={{ position: 'relative' }}>
                <Avatar
                  alt="Unit Image"
                  src={Image} // Using a local image
                  variant="square"
                  sx={{ width: '100%', height: '110px', borderRadius: '5px' }}
                />
                <IconButton
                  sx={{ position: 'absolute', top: '8px', right: '8px', backgroundColor: 'white', padding: '4px' }}
                >
                  <RiDeleteBin6Line style={{fontSize:'11px',padding:'1px',color:'#FF4B4B'}} />
                </IconButton>
                {unit.discounted && (
                  <Typography
                    sx={{
                      position: 'absolute',
                      top: '100px',
                      left: '123px',
                      backgroundColor: '#FFF4EB',
                      color: '#FF9340',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '8px',
                    }}
                  >
                    % Discount Applied
                  </Typography>
                )}
              </Box>

              {/* Estate Details */}
              <Box sx={{ }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ fontSize: '14px', fontWeight: "bold" }} gutterBottom>{unit.estate}</Typography>
                  <Typography
                    sx={{ fontSize: '14px', color: unit.amountColor, cursor: 'pointer' }}
                    onClick={() => handleAmountClick(index)}
                  >
                    {unit.amount}
                  </Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  justifyContent:'space-between',
                  alignItems:'center'
                }}>
                  <Typography sx={{
                    fontSize: '12px',
                    color: '#98A0AC',
                  }}>{unit.description}</Typography>
                  <Badge className='dot'></Badge>
                  <Typography sx={{
                    fontSize: '12px',
                    color: '#98A0AC',
                  }}>{unit.sqfeet}</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-around',margin:'5px -2px'}}>
                    <img src={bed} />
                    <Typography sx={{display:'flex',alignItems:'center',color:'#98A0AC',fontSize:'14px',justifyContent:'space-between'}} >{unit.bed}</Typography>
                    <Badge className='dot'></Badge>
                    <img src={bath} />
                    <Typography sx={{display:'flex',alignItems:'center',color:'#98A0AC',fontSize:'14px',justifyContent:'space-between'}}>{unit.bath}</Typography>
                    <Badge className='dot'></Badge>
                    <img src={home} />
                    <Typography sx={{display:'flex',alignItems:'center',color:'#98A0AC',fontSize:'14px',justifyContent:'space-between'}}>{unit.bhk}</Typography>
                </Box>
                <Box sx={{alignItems:'center',display:'flex',justifyContent:'center'}}>
                  <Customise/>
                {/* <Button variant="text" size="small" sx={{ textTransform:'none',display:'flex',alignItems:'center',justifyContent:'space-around',width:'110px'}}><FaPlus />Customise</Button> */}
              </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Unitdetails;
