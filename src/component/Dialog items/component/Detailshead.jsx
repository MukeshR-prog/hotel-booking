import { Box, Typography } from '@mui/material'
import React from 'react'
import { MdInfoOutline } from "react-icons/md";
export default function Detailshead({head}) {
  return (
    <Box sx={{display:'flex',justifyContent:'space-between',width:'370px',padding:'15px',backgroundColor:head.bgcolor,color:head.color,borderRadius:'5px',alignItems:'center'}}>
        <Typography sx={{
            fontSize:'14px',fontWeight:'bold'
        }}>{head.title}</Typography>
        <MdInfoOutline color='#CED3DD' />
    </Box>
  )
}
