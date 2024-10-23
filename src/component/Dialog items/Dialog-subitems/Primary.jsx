import React from "react";
import Detailshead from "../component/Detailshead";
import { Box } from "@mui/material";
import Revenue from "../component/Revenue";
import ComponentDropdown from "../component/componentdropdown";
import Totalvalue from "../component/Totalvalue";
import PricingCard from "../component/PricingCard ";
import Buttoncre from "../component/button";

function Primary({onBack}) {

  const handleBack = () => {
    onBack();
  }

  const head = {
    title: "Primary Pricing Component",
    color: "#B3776D",
    bgcolor: "#FEEAEA80",
  };
  const total = {
    title: "UOM Value",
    value: "200",
    unit: "SAR / Total",
  };
  const val = {
    head: "Pricing Component",
    button: "Pricing Component",
  }
  const val2 = {
    head: "Task Group For Pricing Component",
    button: "GST",
  }
  const button1 = ["Lease", "Sales", "Manage"];
  const title1 = "Revenue Type";
  const button2 = ["Amount", "UOM"];
  const title2 = "Component Based On";

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
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-around',
      height:'510px'
    }}>
      <Box>
        <Detailshead head={head} />
      </Box>
      <Box sx={{display:'flex',justifyContent:'space-between'}}>
        <Revenue button={button1} title={title1} />
        <ComponentDropdown val={val} />
      </Box>
      <Box sx={{display:'flex',justifyContent:'space-between'}}>
        <ComponentDropdown val={val2} />
        <Revenue button={button2} title={title2} />
      </Box>
      <Totalvalue  total={total} />
      <Box sx={{display:'flex',justifyContent:'space-between'}}>
      <PricingCard
        title="Maximum"
        value={190}
        unit="Sq. Yard/Monthly"
        color="#FF5C5C"
        barValue={100} 
      />
      <PricingCard
        title="Recommended"
        value={120}
        unit="Sq. Yard/Monthly"
        color="#59C36A" 
        barValue={70} 
      />

    
      <PricingCard
        title="Minimum"
        value={100}
        unit="Sq. Yard/Monthly"
        color="#FCA24C"
        barValue={50}
      />
      </Box>
      <Box sx={{display:'flex',justifyContent:'space-between'}}>
      <Buttoncre val ={endbut1} handleBack={handleBack}/>
      <Buttoncre val ={endbut2}/>
      </Box>
    </Box>
  );
}

export default Primary;
