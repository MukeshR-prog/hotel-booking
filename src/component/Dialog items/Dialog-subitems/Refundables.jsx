import React from 'react'
import Detailshead from '../component/Detailshead'
import Revenue from '../component/Revenue'
import { Box } from '@mui/material'
import ComponentDropdown from '../component/componentdropdown'
import Totalvalue from '../component/Totalvalue'
import Buttoncre from '../component/button'
function Refundables({onBack}) {
    const handleBack=()=>{
      onBack();
    }
    const head = {
        title:'Refundable Price Component',
        color:'#6D80B3',
        bgcolor:'#E4EDFF80'
    }
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
      const endbut1={
        title: "Back",
        color: "#091B29",
        bgcolor: "#ffffff",
      }
      
      const endbut2={
        title: "Create New Pricing Table",
        color: "#ffffff",
        bgcolor: "#5078E1",
      }
      const total = {
        title: "Fixed Amount Value",
        value: "200",
        unit: "$ / Monthly",
      };
      const button1 = ["Lease", "Sales", "Manage", "Stay"];
      const title1='Revenue Type';
      const button2 = ["Amount", "Rental Value","%"];
      const title2='Component Based On';
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
          <Revenue button={button1} title={title1} />
          <Box sx={{display:'flex',justifyContent:'space-between'}}>
            {dropdown.map((val, index) => (
              <Box >
                <ComponentDropdown key={index} val={val} />
              </Box>
            ))}
          </Box>
          <Revenue button={button2} title={title2} />
          <Totalvalue  total={total} />
          <Box sx={{display:'flex',justifyContent:'space-between'}}>
      <Buttoncre val ={endbut1} handleBack={handleBack}/>
      <Buttoncre val ={endbut2}/>
      </Box>
        </Box>
      );
    }

export default Refundables