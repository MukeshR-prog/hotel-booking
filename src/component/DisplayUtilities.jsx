import React from 'react'
import AmmenitiesUtils from './AmmenitiesUtils';
import Addamenities from './Addamenities';
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { Box, Button, Typography } from "@mui/material";
function DisplayUtilities() {

    const ammenities = {
        icon: <LiaSwimmingPoolSolid />,
        bold: "#6DAFB3",
        color: "#DBF0F180",
        title: "05 Total Utility",
        total: "$ 200.00",
      };
      const Ammenitieval = [
        {
          name: "Ammenitie name",
          price: "$ 20.00",
          valid: "Valid Feb 22 - 12 Feb 23",
          drop:false
        },
        {
          name: "Ammenitie name",
          price: "$ 20.00",
          valid: "Valid Feb 22 - 12 Feb 23",
          drop:false
        },
        {
          name: "Ammenitie name",
          price: "$ 20.00",
          valid: "Valid Feb 22 - 12 Feb 23",
          drop:false
        },
        {
          name: "Ammenitie name",
          price: "$ 20.00",
          valid: "Valid Feb 22 - 12 Feb 23",
          drop:false
        },
        {
          name: "Ammenitie name",
          price: "$ 20.00",
          valid: "Valid Feb 22 - 12 Feb 23", drop:false
        },
        {
          name: "Ammenitie name",
          price: "$ 20.00",
          valid: "Valid Feb 22 - 12 Feb 23",
          drop:false
        },
        {
          name: "Ammenitie name",
          price: "$ 20.00",
          valid: "Valid Feb 22 - 12 Feb 23",
           drop:false
        },
        {
          name: "Ammenitie name",
          price: "$ 20.00",
          valid: "Valid Feb 22 - 12 Feb 23",
          drop:false
        },
        {
          name: "Ammenitie name",
          price: "$ 20.00",
          valid: "Valid Feb 22 - 12 Feb 23",
          drop:false
        },
      ];

    return (
        <Box sx={{height:'550px',display:'flex',flexDirection:'column',justifyContent:'space-evenly',}}>
          <AmmenitiesUtils ammenities={ammenities} />
          <Typography style={{ color: "#98A0AC", fontSize: "14px" }}>
            Available Amenities
          </Typography>
          <Box
            sx={{
              height: "350px",
              overflow: "scroll",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
    
            {Ammenitieval.map((amenity, index) => (
                <Box sx={{marginBottom:'10px'}}>
              <Addamenities
                key={index}
                name={amenity.name}
                price={amenity.price}
                valid={amenity.valid}
                drop={amenity.drop}
              />
              </Box>
            ))}
          </Box>
          <Button
                
                variant="contained"
               fullWidth
               sx={{
                textTransform:'none',
                color: '#fff',
                fontWeight: 'bold',
                fontSize:'14px',
                backgroundColor:'#5078E1'
               }}
              >
                Update & save
              </Button>
        </Box>
      );
}

export default DisplayUtilities