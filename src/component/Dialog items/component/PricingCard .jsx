import React from "react";
import { Box, Typography } from "@mui/material";

const PricingCard = ({ title, value, unit, color, barValue }) => {
  return (
    <Box sx={{  width: "120px" }}>
    
      <Typography sx={{ color: "#98A0AC", fontSize: "12px", fontWeight: "semibold" }}>
        {title}
      </Typography>

     
      <Box
        sx={{
          height: "5px",
          backgroundColor: "#E4E8EE", 
          borderRadius: "4px",
          marginTop: "5px",
          marginBottom: "10px",
          width: "100%",
        }}
      >
       
        <Box
          sx={{
            height: "5px",
            backgroundColor: color, 
            borderRadius: "4px",
            width: `${barValue}%`,
            transition: "width 0.3s ease", 
          }}
        />
      </Box>

      
      <Box
        sx={{
          border: "1px solid #E4E8EE",
          borderRadius: "5px",
          padding: "8px 5px",
        }}
      >
        <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
          ${value}
        </Typography>
      </Box>

     
      <Typography
        sx={{
          color: "#98A0AC",
          fontSize: "10px",
          fontWeight: "semibold",
          marginTop: "5px",
        }}
      >
        {unit}
      </Typography>
    </Box>
  );
};

export default PricingCard;
