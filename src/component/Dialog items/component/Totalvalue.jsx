import { Box, TextField, Typography } from "@mui/material";
import React from "react";

function Totalvalue({total}) {
  return (
    <Box sx={{display:'flex',flexDirection:'column',gap:'5px'}}>
        <Typography style={{ color: "#98A0AC", fontSize: "12px",fontWeight:'semibold' }}>{total.title}</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "386px",
          padding: "7px",
          borderRadius: "5px",
          alignItems: "center",
          border:'1px solid #E4E8EE'
        }}
      >
        <Typography
          sx={{
            color:'#091B29',
            fontSize: "14px",
            fontWeight: "semibold",
          }}
        >
          <TextField
          variant="outlined"
          placeholder={total.value}
          sx={{
            '& .MuiOutlinedInput-root': {
              padding: '0px', // Remove padding around the input field
              height: 'auto', // Let the height be determined by content
            },
            '& .MuiOutlinedInput-input': {
              padding: '0px', // Remove padding inside the input field
              width: 'auto', // Adjust width to content or container
              fontSize: '14px', // Customize font size if needed
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent' ,// If you want no border or customize it
              border:'none'
            }
          }}
          ></TextField>
          {/* {total.value} */}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "semibold",
            color: "#98A0AC"
          }}
        >
          {total.unit}
        </Typography>
      </Box>
    </Box>
  );
}

export default Totalvalue;
