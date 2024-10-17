import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { FaPlus, FaChevronDown } from "react-icons/fa";

export default function Customise() {
  const [anchorEl, setAnchorEl] = useState(null);

  // The options for the dropdown menu
  const dropdownOptions = ["Add Pricing Component", "Add Amenities", "Add Utilities", "Add Discount","Remove Component"];

  // Open the dropdown menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the dropdown menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const isMenuOpen = Boolean(anchorEl);
  return (
    <>
      {/* Customise Button */}
      <Button
        variant="text"
        size="small"
        startIcon={<FaPlus style={{fontSize:'13px'}} />}
        onClick={handleMenuOpen}
        sx={{
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "110px",
          color:'#5078E1',
          fontSize: "12px",
          fontWeight: "semibold",
          padding: "4px 10px",
          backgroundColor: isMenuOpen ? "#F1F7FF" : "white",
        }}
      >
        Customise
      </Button>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
          "& .MuiMenu-paper": {
            boxShadow: "0px 0px 12px #00000014",
            border: "1px solid #E4E8EE",
            borderRadius: "4px",
            padding:'0px 10px'
          },
        }}
        // MenuListProps={{
        //   sx: {
        //     padding: "0", // Remove default padding
        //   },
        // }}
      >
        {/* Dropdown Options */}
        {dropdownOptions.map((option, index) => (
          <MenuItem
            key={index}
            onClick={handleMenuClose} // Close the menu when clicking an item
            sx={{
              width: "auto",
              fontWeight: "semibold",
              fontSize: "12px",
              color: "#4E5A6B",
            //   padding:'10px',
              borderBottom: "1px solid #E4E8EE",
              "&:last-child": {
                borderBottom: "none", // No border for the last item
              },
              "&:hover": {
                backgroundColor: "none", // Add hover effect
              },
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
