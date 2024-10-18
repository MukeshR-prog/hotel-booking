import React, { useState } from "react";
import { MenuItem, Select, TextField, Box, Typography } from "@mui/material";

const PriceRow = ({ billName, price, discountType, onDiscountChange, onDiscountTypeChange }) => {
  const [discount, setDiscount] = useState("");

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
    onDiscountChange(event.target.value);
  };

  const handleDiscountTypeChange = (event) => {
    onDiscountTypeChange(event.target.value);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid #e0e0e0"
      padding="10px 0"
    >
      <Box flexGrow={1}>
        <Typography fontWeight="bold" fontSize="14px">
          {billName}
        </Typography>
        <Box display="flex" alignItems="center" marginTop="5px">
          <TextField
            value={discount}
            onChange={handleDiscountChange}
            placeholder="100,000"
            size="small"
            style={{ marginRight: "8px", width: "120px" }}
          />
          <Select
            value={discountType}
            onChange={handleDiscountTypeChange}
            size="small"
            style={{ width: "80px" }}
          >
            <MenuItem value="AED">AED</MenuItem>
            <MenuItem value="%">%</MenuItem>
          </Select>
        </Box>
      </Box>
      <Typography fontWeight="bold" fontSize="16px" marginLeft="10px">
        ${price}
      </Typography>
    </Box>
  );
};

export default PriceRow;
