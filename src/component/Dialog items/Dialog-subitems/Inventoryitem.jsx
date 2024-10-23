import React from "react";
import Revenue from "../component/Revenue";
import { Box } from "@mui/material";
import ComponentDropdown from "../component/componentdropdown";
import Buttoncre from "../component/button";
import Buttoninvent from "../component/buttoninvent";
import Detailshead from "../component/Detailshead";
function Inventoryitem({onBack}) {

  const handleBack=()=>{
    onBack();
  }

  const head = {
    title: "Inventory Item Component",
    color: "#B3A16D",
    bgcolor: "#FFFAD880",
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
  const endbut1 = {
    title: "Back",
    color: "#091B29",
    bgcolor: "#ffffff",
  };

  const endbut2 = {
    title: "Create Pricing Component",
    color: "#ffffff",
    bgcolor: "#5078E1",
  };

  const button1 = ["Lease", "Sales", "Manage", "Stay"];
  const button2 = ["Monthly", "Total"];
  const title1 = "Revenue Type";
  const title2 = "Pricing Based On";

  const amt1 = {
    title: "Item Unit Price",
    value: "200",
    unit: "$",
  };

  const amt2 = {
    title: "Quantity",
    value: "10",
    unit: "Qty",
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "510px",
      }}
    >
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
      <Revenue button={button2} title={title2} />

      <Box display={{ display: "flex", justifyContent: "space-between" }}>
        <Buttoninvent val={amt1} />
        <Buttoninvent val={amt2} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Buttoncre val={endbut1} handleBack={handleBack}/>
        <Buttoncre val={endbut2} />
      </Box>
    </Box>
  );
}

export default Inventoryitem;
