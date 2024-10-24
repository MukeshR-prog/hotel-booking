import { Box, Typography } from '@mui/material'
import React from 'react'

function AmmenitiesUtils({ammenities}) {
  return (
    <Box sx={{alignItems:'center',display:'flex',width:'370px',height:'32px',justifyContent:'space-between',padding:'15px',borderRadius:'5px',backgroundColor:ammenities.color}}>
        <Box sx={{display:'flex',gap:'10px',alignItems:'center'}}>
            <Box sx={{fontSize:'35PX',color:ammenities.bold,marginTop:'15px'}}>{ammenities.icon}</Box>
            <Typography sx={{fontSize:'16px', color:ammenities.bold}}>{ammenities.title}</Typography>
        </Box>
        <Box>
            <Typography sx={{fontSize:'16px',color:ammenities.bold}}>{ammenities.total}</Typography>
        </Box>
    </Box>
  )
}

export default AmmenitiesUtils