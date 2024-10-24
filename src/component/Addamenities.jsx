import { Badge, Box, Checkbox, Radio, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import estate from "../assets/estate.jpeg";
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Addamenities({ name, price, valid, drop }) {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  
  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 34,
    height: 20,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& .MuiSwitch-thumb': {
          backgroundColor: '#5AC782', // Circle color when checked
        },
        '& + .MuiSwitch-track': {
          backgroundColor: '#EEF9EE', // Background color when checked
          opacity: 1,
          border: 0,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.grey[100],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.7,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 16,
      height: 16,
      backgroundColor: '#98A0AC', // Circle color when unchecked
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: '#E4E8EE', // Background color when unchecked
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  
  return (
    <Box>
      <Box
        sx={{
          width: "400px",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid #E4E8EE",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          borderBottomLeftRadius: !checked ? "10px" : "none",
          borderBottomRightRadius: !checked ? "10px" : "none",
        }}
      >
        <Box
          sx={{ display: "flex", padding: "10px 10px 6px 10px", gap: "15px",alignItems:'center' }}
        >
          <Box>
            <img
              src={estate}
              style={{ width: "48px", height: "48px", borderRadius: "5px" }}
            />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "semibold" }}>
              {name}
            </Typography>
            <Box
              sx={{
                fontSize: "12px",
                color: "#4E5A6B",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Typography sx={{fontSize:'12px',fontWeight:'semibold'}}>{price}</Typography>
              <Badge className="dot"></Badge>
              <Typography sx={{fontSize:'12px',fontWeight:'semibold'}} >{valid}</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
    
      <FormControlLabel
        control={<IOSSwitch sx={{ }} />}
        checked={checked}
        onChange={handleChange}
      />
{/* 
          <Switch
            checked={checked}
            onChange={handleChange}
            sx={{
              "& .MuiSwitch-switchBase": {
                "&.Mui-checked": {
                  color: "#5AC782", // Change the switch handle color
                },
                "&.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#5AC782", // Change track color when checked
                },
              },
              "& .MuiSwitch-track": {
                backgroundColor: "#98A0AC", // Default track color when unchecked
                borderRadius: "20px",
              },
            }}
          /> */}

        

        </Box>
      </Box>
      {checked && drop && (
        <Box
          sx={{
            display: "flex",
            width: "400px",
            alignItems: "center",
            borderBottom: "1px solid #E4E8EE",
            borderRight: "1px solid #E4E8EE",
            borderLeft: "1px solid #E4E8EE",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          {/* <input type="checkbox" ></input> */}
          <Checkbox size="small" sx={{borderRadius:'50%'}}></Checkbox>
          <Typography sx={{ color: "#4E5A6B", fontSize: "12px" }}>
            Free applicability
          </Typography>
        </Box>
      )}
    </Box>
  );
}
