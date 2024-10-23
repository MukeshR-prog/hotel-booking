import React, { useState } from "react";
import { MenuItem, Select, Box, Typography } from "@mui/material";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

const PriceRow = ({
  billName,
  price,
  discountType,
  onDiscountChange,
  onDiscountTypeChange,
}) => {
  const [discount, setDiscount] = useState("");
  const [open, setOpen] = useState(false);

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
    onDiscountChange(event.target.value);
  };

  const handleDiscountTypeChange = (event) => {
    onDiscountTypeChange(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid #e0e0e0"
      padding="10px 0"
    >
      <Box flexGrow={2} sx={{display:'flex',flexDirection:'column',gap:'5px'}}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "semibold", color: "#4E5A6B" }}
          >
            {billName}
          </Typography>
          <Typography fontWeight="bold" fontSize="14px" color="#4E5A6B">
            ${price}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "semibold",
              color: "#98A0AC",
              fontStyle: "italic",
            }}
          >
            Discount
          </Typography>

          <Box display="flex" alignItems="center" sx={{ gap: 0 }}>
            <input
              value={discount}
              onChange={handleDiscountChange}
              placeholder="100,000"
              style={{
                width: "65px",
                padding: "5.2px 2px",
                border: "1px solid #E4E8EE",
                borderRadius: "4px",
              }}
            />
            <Select
              value={discountType}
              onChange={handleDiscountTypeChange}
              onOpen={handleOpen}
              onClose={handleClose}
              size="small"
              IconComponent={() =>
                open ? (
                  <FaChevronUp style={{ color: "#091B29", fontSize: "50px" }} />
                ) : (
                  <FaChevronDown
                    style={{ color: "#091B29", fontSize: "50px" }}
                  />
                )
              }
              sx={{
                width: "80px",
                height: "28px",
                padding: "5px 10px",
                fontSize: "12px",
                fontWeight: "bold",
                border: "1px solid #E4E8EE",
                display: "flex",
                backgroundColor: "#ffffff",
                // alignItems: 'center',
                // justifyContent: 'space-between', 
                paddingLeft: "8px", 
                "& .MuiSelect-select": {
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "0px",
                  paddingLeft: "0px",
                },
                "&:hover": {
                  backgroundColor: "#ffffff",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem
                value="AED"
                sx={{
                  fontSize: "12px",
                  color: "#5078E1",
                  fontWeight: "bold",
                  padding: "2px 8px",
                }}
              >
                AED
              </MenuItem>
              <MenuItem
                value="%"
                sx={{
                  fontSize: "12px",

                  fontWeight: "bold",
                  padding: "2px 8px",
                }}
              >
                %
              </MenuItem>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceRow;
