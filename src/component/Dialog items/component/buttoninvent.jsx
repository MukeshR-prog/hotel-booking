import { Box, Typography } from "@mui/material";
import React from "react";

function Buttoninvent({val}) {
  return (
    <Box sx={{display:'flex',flexDirection:'column',gap:'5px'}} >
      <Typography
        style={{ color: "#98A0AC", fontSize: "12px", fontWeight: "semibold" }}
      >
        {val?.title}
      </Typography>
      <Box
        sx={{
          fontWeight: "semibold",
          fontSize: "14px",
          color: "#091B29", 
          borderColor: "#E4E8EE", 
          borderRadius: "6px", 
          padding: "6px 10px",
          backgroundColor: "#FFFFFF",
          width: "170px", 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          border: "1px solid #E4E8EE",
        }}
      >
        <Typography sx={{color:'#091B29',fontSize:'14px',fontWeight:'semibold'}}>{val.value}</Typography>
        <Typography sx={{color:'#98A0AC',fontSize:'14px',fontWeight:'semibold'}}>{val.unit}</Typography>
        
      </Box>
    </Box>
  );
}

export default Buttoninvent;
