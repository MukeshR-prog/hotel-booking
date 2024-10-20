import React from "react";
import { Box, Typography } from "@mui/material";

const PricingCard = ({ title, value, unit, color, barValue }) => {
  return (
    <Box sx={{  width: "120px" }}>
      {/* Title */}
      <Typography sx={{ color: "#98A0AC", fontSize: "12px", fontWeight: "semibold" }}>
        {title}
      </Typography>

      {/* Full Progress Bar Container (Remaining part in #E4E8EE) */}
      <Box
        sx={{
          height: "5px",
          backgroundColor: "#E4E8EE", // Remaining part color
          borderRadius: "2px",
          marginTop: "5px",
          marginBottom: "10px",
          width: "100%", // Full width of the bar
        }}
      >
        {/* Filled part of the bar */}
        <Box
          sx={{
            height: "5px",
            backgroundColor: color, // Color for the filled part
            borderRadius: "4px",
            width: `${barValue}%`, // Dynamic width based on barValue
            transition: "width 0.3s ease", // Smooth transition when barValue changes
          }}
        />
      </Box>

      {/* Box for Price Value */}
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

      {/* Unit */}
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
