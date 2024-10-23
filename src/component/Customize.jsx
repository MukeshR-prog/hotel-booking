import React, { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
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
import Primesecond from "./Primesecond";
import Primary from "./Dialog items/Dialog-subitems/Primary";
import Secondary from "./Dialog items/Dialog-subitems/Secondary";
import Onetimecharges from "./Dialog items/Dialog-subitems/Onetimecharges";
import Refundables from "./Dialog items/Dialog-subitems/Refundables";
import Inventoryitem from "./Dialog items/Dialog-subitems/Inventoryitem";
import Parkingslot from "./Dialog items/Dialog-subitems/Parkingslot";

export default function Customise() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

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
    setSelectedItem(null);
    // handleMenuClose();
  };

  const handleDialogClose = () => {
    setOpenDialog("");
    setSelectedItem(null);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item.text);
  };

  const backclick = () =>{
    setSelectedItem(null);
  }
  const isMenuOpen = Boolean(anchorEl);

  return (
    <>
    
      <Button
        variant="text"
        size="small"
        startIcon={<FaPlus style={{ fontSize: "12px" }} />}
        onClick={handleMenuOpen}
        sx={{
          backgroundColor: isMenuOpen ? "#F1F7FF" : "white",
          textTransform: "none",
          fontSize: "12px",
          fontWeight: "semibold",
          color: "#5078e1",
          width: "110px",
        }}
      >
        Customise
      </Button>

    
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        classes={{ paper: "menu-paper" }}
      >
       
        {dropdownOptions.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => handleMenuItemClick(option)}
            className="menu-item"
            sx={{
              width: "auto",
              fontWeight: "semibold",
              fontSize: "12px",
              color: "#4e5a6b",
              borderBottom: "1px solid #e4e8ee",
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

      <Dialog
        open={openDialog === "Add Pricing Component"}
        onClose={handleDialogClose}
        maxWidth={false}
        fullWidth
        PaperProps={{
          sx: {
            width: "450px",
            height: "605px",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #E4E8EE",
          }}
        >
          Pricing Table
          <IconButton aria-label="close" onClick={handleDialogClose}>
            <IoCloseOutline />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          {selectedItem ? (
            <Box>
              {selectedItem === "Primary" && <Primary onBack={backclick}/>}
              {selectedItem === "Secondary" && <Secondary onBack={backclick}/>}
              {selectedItem === "One Time Charges" && <Onetimecharges onBack={backclick} />}
              {selectedItem === "Refundables" && <Refundables onBack={backclick} />}
              {selectedItem === "Inventory Item" && <Inventoryitem onBack={backclick}/>}
              {selectedItem === "Parking Slot" && <Parkingslot onBack={backclick}/>}
            </Box>
          ) : (
            <Primesecond onItemClick={handleItemClick} />
          )}
        </DialogContent>
      </Dialog>

     
      <Dialog
        open={openDialog === "Add Amenities"}
        onClose={handleDialogClose}
        maxWidth={false} 
        fullWidth
        PaperProps={{
          sx: {
            width: "auto", 
            maxWidth: "90vw", 
            padding: 0,
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #E4E8EE",
          }}
        >
          Add Amenities
          <IconButton
            aria-label="close"
            onClick={handleDialogClose}
            className="dialog-close-button"
          >
            <IoCloseOutline />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Displayammenities />
        </DialogContent>
      </Dialog>

     
      <Dialog
        open={openDialog === "Add Utilities"}
        onClose={handleDialogClose}
        maxWidth={false} 
        fullWidth
        PaperProps={{
          sx: {
            width: "auto",
            maxWidth: "90vw", 
            padding: 0,
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #E4E8EE",
          }}
        >
          Add Utilities
          <IconButton
            aria-label="close"
            onClick={handleDialogClose}
            className="dialog-close-button"
          >
            <IoCloseOutline />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ display: "flex" }}>
          <Popupside1 />
          <Unitpricedetails />
        </DialogContent>
      </Dialog>

   
      <Dialog
        open={openDialog === "Add Discount"}
        onClose={handleDialogClose}
        maxWidth={false}
        fullWidth
        PaperProps={{
          sx: {
            width: "auto", 
            maxWidth: "90vw", 
            padding: 0,
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #E4E8EE",
          }}
        >
          Add Discount
          <IconButton
            aria-label="close"
            onClick={handleDialogClose}
            className="dialog-close-button"
          >
            <IoCloseOutline />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ display: "flex" }}>
          <Popupside1 />
          <PriceList />
        </DialogContent>
      </Dialog>

     
      <Dialog
        open={openDialog === "Remove Component"}
        onClose={handleDialogClose}
        maxWidth={false}
        fullWidth
        PaperProps={{
          sx: {
            width: "auto", 
            maxWidth: "90vw", 
            padding: 0,
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #E4E8EE",
          }}
        >
          Remove Component
        
          <IconButton
            aria-label="close"
            onClick={handleDialogClose}
            className="dialog-close-button"
          >
            <IoCloseOutline />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Popupside1 />
          <Popupside1delete />
        </DialogContent>
      </Dialog>
    </>
  );
}
