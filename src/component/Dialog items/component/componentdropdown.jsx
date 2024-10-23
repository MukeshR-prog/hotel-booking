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
        endIcon={<IoChevronDownSharp/>} 
        sx={{
          textTransform: 'none',
          fontWeight:'semibold',
          fontSize: '14px',
          color: '#091B29', 
          borderColor: '#E4E8EE',
          borderRadius: '6px',
          padding: '6px 10px',
         backgroundColor:'#FFFFFF',
         width: '190px', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {val.button}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      
      >
        <MenuItem onClick={handleClose}>pricing component </MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </Box>
  );
}

export default ComponentDropdown;
