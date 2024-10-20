import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import { IoChevronDownSharp } from "react-icons/io5";

function ComponentDropdown({val}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{display:'flex',flexDirection:'column',gap:'5px'}} >
        <Typography style={{ color: "#98A0AC", fontSize: "12px" }}>{val.head}</Typography>
      <Button
       variant='outlined'
        onClick={handleClick}
        endIcon={<IoChevronDownSharp/>} // Chevron icon on the right
        sx={{
          textTransform: 'none',
          fontWeight:'semibold',
          fontSize: '14px',
          color: '#091B29', // Dark text color
          borderColor: '#E4E8EE', // Light border color
          borderRadius: '6px', // Rounded corners
          padding: '6px 10px',
         backgroundColor:'#FFFFFF',
         width: '190px', // Fixed width for the button
          display: 'flex', // Flexbox for spacing
          justifyContent: 'space-between', // Space between text and icon
          alignItems: 'center',
        }}
      >
        {val.button}
      </Button>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </Box>
  );
}

export default ComponentDropdown;
