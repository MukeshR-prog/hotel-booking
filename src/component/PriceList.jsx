import React, { useState } from "react";
import PriceRow from "./PriceRow";
import { Button, Paper, Typography, Box } from "@mui/material";

const PriceList = () => {
  const [billData, setBillData] = useState([
    { billName: "Bill Name Here", price: 1000, discountType: "AED" },
    { billName: "Bill Name Here", price: 1000, discountType: "AED" },
    { billName: "Bill Name Here", price: 1000, discountType: "AED" },
    { billName: "Bill Name Here", price: 1000, discountType: "AED" },
    { billName: "Utility Name Here", price: 1000, discountType: "AED" },
    { billName: "Amenity Name Here", price: 1000, discountType: "AED" },
    { billName: "Bill Name Here", price: 1000, discountType: "AED" },
    { billName: "Bill Name Here", price: 1000, discountType: "AED" },
    { billName: "Bill Name Here", price: 1000, discountType: "AED" },
  ]);

  const handleDiscountChange = (index, newDiscount) => {
    const updatedData = [...billData];
    updatedData[index].discount = newDiscount;
    setBillData(updatedData);
  };

  const handleDiscountTypeChange = (index, newType) => {
    const updatedData = [...billData];
    updatedData[index].discountType = newType;
    setBillData(updatedData);
  };

  const calculateTotal = () => {
    return billData.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Box  style={{ padding: "16px", width: "400px", borderRadius: "8px" }}>
      <Box sx={{backgroundColor:'#F8F9FB',padding:'10px 20px',borderRadius: "8px"}}>
      <Typography sx={{fontSize:'14px',fontWeight:'bold',color:'#4E5A6B'}}>
        UNIT PRICE DETAIL
      </Typography>
      <Box sx={{
        height:'400px',overflow:'scroll',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none', 
        },
      }}>
      {billData.map((bill, index) => (
        <PriceRow
          key={index}
          billName={bill.billName}
          price={bill.price}
          discountType={bill.discountType}
          onDiscountChange={(newDiscount) => handleDiscountChange(index, newDiscount)}
          onDiscountTypeChange={(newType) => handleDiscountTypeChange(index, newType)}
        />
      ))}
      </Box>

      <Box
      sx={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'10px 5px',
        backgroundColor:'#E4E8EE'
      }}
      >
        <Typography fontWeight="bold" fontSize="14px">Final Total</Typography>
        <Typography fontWeight="bold" fontSize="14px">
          ${calculateTotal()}
        </Typography>
      </Box>
      </Box>
      <Button
        variant="contained"
        fullWidth
        style={{ marginTop: "15px", padding: "10px 0", fontSize: "14px",textTransform:'none' ,backgroundColor:'#5078E1'}}
      >
        Apply Discount
      </Button>
    </Box>
  );
};

export default PriceList;
