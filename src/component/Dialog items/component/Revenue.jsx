import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

function Revenue({button,title}) {

  const [active, setActive] = useState(null); 

  const ButtonClick = (index) => {
    setActive(index); 
  };
  return (
    <Box sx={{display:'flex',flexDirection:'column',gap:'5px'}}>
      <Typography style={{ color: "#98A0AC", fontSize: "12px",fontWeight:'semibold' }}>
        {title}
      </Typography>
      <Box>
      {button.map((but, index) => (
        <Button
          key={index}
          onClick={() => ButtonClick(index)}
          sx={{
            minWidth:'auto',
            padding: "6px 10px",
            textTransform: "none",
            fontSize: "14px",
            fontWeight: "semibold",
            border: "1px solid #E4E8EE",
            marginRight:'6px',
            color: active === index ? "#FFFFFF" : "#4E5A6B",
            backgroundColor: active === index ? "#5078E1" : "#FFFFFF",
          }}
        >
          {but}
        </Button>
      ))}
      </Box>
    </Box>
  );
}

export default Revenue;
