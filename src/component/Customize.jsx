import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  IconButton,
} from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import "../styles/Customise.css";
import Popupside1 from "./Popupside1";
import Popupside1delete from "./Popupside1delete";
import PriceList from "./PriceList";
import Unitpricedetails from "./Unitpricedetails";
import Displayammenities from "./Displayammenities";

export default function Customise() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState("");

  const dropdownOptions = [
    "Add Pricing Component",
    "Add Amenities",
    "Add Utilities",
    "Add Discount",
    "Remove Component",
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option) => {
    setOpenDialog(option);
    handleMenuClose();
  };

  const handleDialogClose = () => {
    setOpenDialog("");
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <>
      {/* Customise Button */}
      <Button
        variant="text"
        size="small"
        startIcon={<FaPlus style={{ fontSize: "12px", }} />}
        onClick={handleMenuOpen}
        sx={{
          backgroundColor: isMenuOpen ? "#F1F7FF" : "white",
          textTransform:'none',
          fontSize:'12px',
          fontWeight:'semibold',
          color:'#5078e1',
          width:'110px'
        }}
      
      >
        Customise
      </Button>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        classes={{ paper: "menu-paper" }} // Apply custom class
      >
        {/* Dropdown Options */}
        {dropdownOptions.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => handleMenuItemClick(option)}
            className="menu-item"
            sx={{width:'auto',
              fontWeight:"semibold",
              fontSize:"12px",
              color:'#4e5a6b',
              borderBottom:'1px solid #e4e8ee'
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

      {/* Dialog for Add Pricing Component */}
      <Dialog
        open={openDialog === "Add Pricing Component"}
        onClose={handleDialogClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Add Pricing Component
          <IconButton
            aria-label="close"
            onClick={handleDialogClose}
            className="dialog-close-button"
          >
            <IoCloseOutline />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography>Add pricing details for the component here.</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDialogClose}
            variant="contained"
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for Add Amenities */}
      <Dialog
        open={openDialog === "Add Amenities"}
        onClose={handleDialogClose}
        maxWidth={false}  // Disable fixed width
        fullWidth
        PaperProps={{
          sx: {
            width: 'auto',  // Adjust based on content width
            maxWidth: '90vw',  // Maximum width limit
            padding: 0
          }
        }}
      >
        <DialogTitle className="dialog-head">
          Add Amenities
          <IconButton
            aria-label="close"
            onClick={handleDialogClose}
            className="dialog-close-button"
          >
            <IoCloseOutline />
          </IconButton>
        </DialogTitle>
        <DialogContent >
         <Displayammenities/>
        </DialogContent>

      </Dialog>

      {/* Dialog for Add Utilities */}
      <Dialog
        open={openDialog === "Add Utilities"}
        onClose={handleDialogClose}
        maxWidth={false}  // Disable fixed width
        fullWidth
        PaperProps={{
          sx: {
            width: 'auto',  // Adjust based on content width
            maxWidth: '90vw',  // Maximum width limit
            padding: 1
          }
        }}
      >
        <DialogTitle className="dialog-head">
          Add Utilities
          <IconButton
            aria-label="close"
            onClick={handleDialogClose}
            className="dialog-close-button"
          >
            <IoCloseOutline />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ display: 'flex',  }}> {/* Add gap between components */}
          <Popupside1 />
          <Unitpricedetails/>
        </DialogContent>
      </Dialog>

      {/* Dialog for Add Discount */}
      <Dialog
        open={openDialog === "Add Discount"}
        onClose={handleDialogClose}
        maxWidth={false}
        fullWidth
        PaperProps={{
          sx: {
            width: 'auto',  // Adjust based on content width
            maxWidth: '90vw',  // Maximum width limit
            padding: 0
          }
        }}
      >
        <DialogTitle className="dialog-head">
          Add Discount
          <IconButton
            aria-label="close"
            onClick={handleDialogClose}
            className="dialog-close-button"
          >
            <IoCloseOutline />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ display: 'flex',  }}> {/* Add gap between components */}
          <Popupside1 />
          <PriceList/>
        </DialogContent>
       
      </Dialog>

      {/* Dialog for Remove Component */}
      <Dialog
        open={openDialog === "Remove Component"}
        onClose={handleDialogClose}
        maxWidth={false}  // Disable fixed width
        fullWidth
        PaperProps={{
          sx: {
            width: 'auto',  // Adjust based on content width
            maxWidth: '90vw',  // Maximum width limit
            padding: 1
          }
        }}
      >
        <DialogTitle className="dialog-head">
          Remove Component
          {/* Close Button */}
          <IconButton
            aria-label="close"
            onClick={handleDialogClose}
            className="dialog-close-button"
          >
            <IoCloseOutline />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ display: 'flex',justifyContent:'space-between'  }}> {/* Add gap between components */}
          <Popupside1 />
          <Popupside1delete />
        </DialogContent>
      </Dialog>
    </>
  );
}
