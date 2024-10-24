import { Box, Typography } from "@mui/material";
import React from "react";
import Estate from "./Estate";

function Mainpage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box sx={{ backgroundColor: "red", height: "8%" }}>
        <Typography>head</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "yellow",
          display: "flex",
          height: "91%",
          width: "100%",
        }}
      >
        <Typography
          sx={{ height: "100%", width: "5%", backgroundColor: "green" }}
        >
          body
        </Typography>
        <Typography sx={{ width: "95%" }}>
          <Estate />
        </Typography>
      </Box>
    </Box>
  );
}

export default Mainpage;
