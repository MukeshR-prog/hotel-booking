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
    <Paper elevation={3} style={{ padding: "20px", width: "400px", borderRadius: "8px" }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        UNIT PRICE DETAIL
      </Typography>
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

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="15px 0"
        marginTop="20px"
        borderTop="2px solid #e0e0e0"
        bgcolor="#f5f5f5"
      >
        <Typography fontWeight="bold">Final Total</Typography>
        <Typography fontWeight="bold" fontSize="16px">
          ${calculateTotal()}
        </Typography>
      </Box>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: "15px", padding: "10px 0", fontSize: "16px" }}
      >
        Apply Discount
      </Button>
    </Paper>
  );
};

export default PriceList;
