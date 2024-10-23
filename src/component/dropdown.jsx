import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { FaChevronDown } from "react-icons/fa6";

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectoption , setselectoption]=useState('Casagrand')
  const dropdownOptions = ['Casagrand','Calculator', 'Card', 'List'];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
 const handleMenuClick = (option)=>{
  handleMenuClose();
  setselectoption(option);
 }
  return (
    <>
      <Button
        endIcon={<FaChevronDown style={{
          width: "16px",
            color:'#091B29',
            transform: anchorEl ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.2s all"
        }}/>}
        onClick={handleMenuOpen}
        sx={{
            width:'166px',
            gap:'15px',
          textTransform:'none',
          fontSize: "14px",
          justifyContent:'space-around',
          padding:'4px 10px',
          fontWeight:'semibold',
          color:'#091B29',
          border: '1px solid #E4E8EE',  
          borderRadius:'8px',
          whiteSpace: 'nowrap',  
           backgroundColor: '#F5F7FA',
          '&:hover': {
            backgroundColor: '#ffffff',
            color: '#000000',
          },
        }}
      >
        {selectoption}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
          
          border: '1px solid #E4EAEE',  
          borderRadius: '8px',  
          '& .MuiMenu-paper': {
            boxShadow: '0px 0px 12px #00000014',
            border:'1px solid #E4EAEE',

          },
        }}
        MenuListProps={{
          sx: {
            padding: '0',  
            boxShadow:'none'
          }
        }}
      >
        {dropdownOptions.map((option, index) => (
          <MenuItem
            key={index}
            onClick={()=>handleMenuClick(option)}
            sx={{
                width:'164px',
              fontWeight:'medium',
              boxShadow:'none',
              fontSize: '14px',
              color: '#101010',
              borderBottom: '1px solid #E4EAEE', 
              '&:last-child': {
                borderBottom: 'none',  
              },
              '&:hover': {
                
                backgroundColor: '#f5f5f5', 
              },
              '& .MuiMenu-paper': {
                boxShadow:'none',
              },
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}