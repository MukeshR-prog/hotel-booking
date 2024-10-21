import React from "react";
import Detailshead from "../component/Detailshead";
import { Box } from "@mui/material";
import Revenue from "../component/Revenue";
import ComponentDropdown from "../component/componentdropdown";
import Totalvalue from "../component/Totalvalue";
import Buttoncre from "../component/button";

function Secondary() {
  const head = {
    title: "Secondary Components",
    color: "#896DB3",
    bgcolor: "#EDE4FE80",
  };
  const dropdown = [
    {
      head: "Pricing Component",
      button: "Pricing Component",
    },
    {
      head: "Tax Group For Pricing Component",
      button: "GST",
    },
  ];

  const button1 = ["Lease", "Sales", "Manage", "Stay"];
  const title1 = "Revenue Type";
  const button2 = ["Yes", "No"];
  const title2 = "Chargeble";
  const button3 = ["Amount", "UOM", "%"];
  const title3 = "Component Based On";

  const total = {
    title: "UOM Value",
    value: "200",
    unit: "$ / Monthly",
  };

  const endbut1={
    title: "Back",
    color: "#091B29",
    bgcolor: "#ffffff",
  }
  
  const endbut2={
    title: "Create Pricing Component",
    color: "#ffffff",
    bgcolor: "#5078E1",
  }
  return (
    <Box 
    sx={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-around',
      height:'510px'
    }}>
      <Box>
        <Detailshead head={head} />
      </Box>
      <Revenue button={button1} title={title1} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {dropdown.map((val, index) => (
          <Box>
            <ComponentDropdown key={index} val={val} />
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Revenue button={button2} title={title2} />
        <Revenue button={button3} title={title3} />
      </Box>
      <Totalvalue  total={total} />
      <Box sx={{display:'flex',justifyContent:'space-between'}}>
      <Buttoncre val ={endbut1}/>
      <Buttoncre val ={endbut2}/>
      </Box>
    </Box>
  );
}

export default Secondary;
