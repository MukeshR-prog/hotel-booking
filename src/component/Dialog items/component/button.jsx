import { Box, Button } from '@mui/material'
import React from 'react'

function Buttoncre({val}) {
  return (
    <Button sx={{
        minWidth:'auto',
        padding: "6px 10px",
        textTransform: "none",
        fontSize: "14px",
        fontWeight: "bold",
        border: "1px solid #E4E8EE",
       
        color:val.color,
        backgroundColor:val.bgcolor,
    }}>
{val.title}
    </Button>
  )
}

export default Buttoncre