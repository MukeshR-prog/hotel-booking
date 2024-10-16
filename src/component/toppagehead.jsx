import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Dropdown from "./dropdown";
import { FaAngleLeft } from "react-icons/fa6";
import "../styles/toppagehead.css";
function Toppagehead() {
  return (
    <Box className="top-box">
      <Box className="top-in">
        <IconButton>
          <FaAngleLeft className="top-left-button" />
        </IconButton>
        <Typography className="top-in-text" fontWeight={'bold'}>
          Create Quotation To Existing Lead
        </Typography>
      </Box>
      <Dropdown />
    </Box>
  );
}

export default Toppagehead;
