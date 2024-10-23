import { Box, Typography, Tooltip } from '@mui/material';
import React from 'react';
import { MdInfoOutline } from "react-icons/md";

export default function Detailshead({ head }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '370px',
        padding: '15px',
        backgroundColor: head.bgcolor,
        color: head.color,
        borderRadius: '5px',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 'bold',
        }}
      >
        {head.title}
      </Typography>

      <Tooltip
        title="Base rent or monthly rental amount. You can have only one primary pricing component per property."
        arrow
        placement="top"
        componentsProps={{
          tooltip: {
            sx: {
              backgroundColor: '#FFFFFF',
              color: '#000000', 
              fontSize: '12px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
            },
          },
          arrow: {
            sx: {
              color: '#FFFFFF', 
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <MdInfoOutline color='#CED3DD' />
        </Box>
      </Tooltip>
    </Box>
  );
}
