import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { FaRulerCombined, FaDownload } from "react-icons/fa";
import "../styles/popupside1.css";
import bed from "../assets/bed.png";
import bath from "../assets/bath.svg";
import sqft from "../assets/Sqft.svg";
import book from "../assets/book.svg";
import home from "../assets/home.png";
import Image from "../assets/estate.jpeg"; // Use the estate image for the main property image

export default function Popupside1() {
  return (
    <Box className="property-card-container">
      {/* Images Section */}
      <Grid container spacing={2}>
        <Grid item xs={7} className="main-image-container">
          <img
            src={Image}
            alt="Main Property"
            className="property-main-image"
          />
        </Grid>
        <Grid item xs={5}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <img
                src={Image} // Use the estate image as the thumbnail
                alt="Thumbnail 1"
                className="property-thumbnail"
              />
            </Grid>
            <Grid item xs={6}>
              <img
                src={Image} // Use the estate image as the thumbnail
                alt="Thumbnail 2"
                className="property-thumbnail"
              />
            </Grid>
            <Grid item xs={6}>
              <img
                src={Image} // Use the estate image as the thumbnail
                alt="Thumbnail 3"
                className="property-thumbnail"
              />
            </Grid>
            <Grid item xs={6}>
              <Box className="property-thumbnail-box">
                <img
                  src={Image} // Use the estate image as the thumbnail
                  alt="Thumbnail 4"
                  className="property-thumbnail"
                />
                <span className="thumbnail-overlay">+8</span>{" "}
                {/* Centered span with background */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Property Info Section */}
      <Box mt={1}>
        <Box sx={{display:'flex',gap:'10px'}}>
          <Typography fontSize={"18px"} fontWeight="bold">
            Jumeirah Estate
          </Typography>
          <Box className="property-info-box">
            <Typography
              sx={{ fontSize: "12px", fontWeight: "bold" }}
              className="unit-code"
            >
              UNT-1234
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ fontSize: "14px", color: "#4E5A6B" }}>
          Rubix Apartment, K Tower, Floor 1
        </Typography>
      </Box>

      {/* Property Details */}
      <Box mt={1} className="property-details-container">
        <Box className="property-icon-text">
          <img src={bed} alt="Bed" className="property-icon-image" />
          <Typography
            sx={{ fontSize: "14px", fontWeight: "bold", color: "#4E5A6B" }}
          >
            2
          </Typography>
        </Box>
        <Box className="property-icon-text">
          <img src={bath} alt="Bath" className="property-icon-image" />
          <Typography
            sx={{ fontSize: "14px", fontWeight: "bold", color: "#4E5A6B" }}
          >
            2
          </Typography>
        </Box>
        <Box className="property-icon-text">
          <img src={home} alt="Home" className="property-icon-image" />
          <Typography
            sx={{ fontSize: "14px", fontWeight: "bold", color: "#4E5A6B" }}
          >
            2BHK
          </Typography>
        </Box>
        <Box className="property-icon-text">
          <img src={sqft} className="property-icon-image" />
          <Typography
            sx={{ fontSize: "14px", fontWeight: "bold", color: "#4E5A6B" }}
          >
            2000 Sq.Ft
          </Typography>
        </Box>
      </Box>

      {/* Handbook Section */}
      <Box mt={2} className="handbook-container">
        <Typography variant="body2" color="textSecondary">
          <Box
            component="span"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              fontSize: "14px",
              fontWeight: "semibold",
              color: "#091B29",
            }}
          >
            <img src={book} className="property-icon-image" />
            Handbook
          </Box>
        </Typography>
        <Button
          style={{ fontWeight: "semibold", fontSize: "14px", color: "#5078E1" }}
        >
          View / Download
        </Button>
      </Box>
    </Box>
  );
}
