import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

function Quotation() {
  // Data array
  const data = [
    { description: "Total Amount", qty: "3", amount: "$ 3,600.00" },
    { description: "Total Discount", qty: "10%", amount: "- $ 100.00" },
    { description: "Total Refundable", qty: "0%", amount: "$ 0" },
    { description: "Total Tax", qty: "18%", amount: "$ 648.00" },
  ];

  // Quote Amount
  const quoteAmount = "$ 4,148.00";

  return (
    <Box sx={{ borderRadius: "8px", padding: "5px" ,margin:'10px'}}>
      {/* Quotation Summary Title */}
      <Typography sx={{ color: "#4E5A6B", fontSize: "14px", mb: 2 }}>
        Quotation Summary
      </Typography>

      {/* Table container */}
      <Box sx={{height:'439px',display:'flex',flexDirection:'column',justifyContent:'space-between',backgroundColor: "#F7F8FA",alignItems:'center'}}>
      <TableContainer style={{  padding: "5px",margin:'5px' ,alignItems:'center'}}>
        <Table>
          <TableBody>
            {/* Table header */}
            <TableRow>
              <TableCell
                sx={{ color: "#98A0AC", fontWeight: "bold", fontSize: "10px" }}
              >
                DESCRIPTION
              </TableCell>
              <TableCell
                sx={{ color: "#98A0AC", fontWeight: "bold", fontSize: "10px" }}
              >
                QTY
              </TableCell>
              <TableCell
                sx={{ color: "#98A0AC", fontWeight: "bold", fontSize: "10px" ,textAlign:'end'}}
              >
                AMOUNT
              </TableCell>
            </TableRow>

            {/* Data Rows */}
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    color: "#4E5A6B",
                    fontSize: "14px",
                    borderBottom: "none",
                    fontWeight: "semibold",
                    borderTop: "1px solid #E4E8EE",
                  }}
                >
                  {row.description}
                </TableCell>
                <TableCell
                   sx={{
                    color: "#4E5A6B",
                    fontSize: "14px",
                    borderBottom: "none",
                    fontWeight: "normal",
                    borderTop: "1px solid #E4E8EE",
                  }}
                >
                  {row.qty}
                </TableCell>
                <TableCell
                  sx={{
                    // color: row.amount.includes("-") ? "#FF5A5A" : "#4E5A6B",
                    fontSize: "14px",
                    borderBottom: "none",
                    textAlign: "right",
                    fontWeight:'bold',
                    borderTop: "1px solid #E4E8EE",
                  }}
                >
                  {row.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Quote Amount */}
      <Box sx={{width:'100%',}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "16px",
          borderTop: "1px solid #E4E8EE",
          margin:'10px'
        }}
      >
        <Typography
          sx={{ color: "#4E5A6B", fontWeight: "bold", fontSize: "16px" }}
        >
          Quote Amount
        </Typography>
        <Typography
          sx={{ color: "#091B29", fontWeight: "bold", fontSize: "16px", }}
        >
          {quoteAmount}
        </Typography>
      </Box>
      </Box>
      </Box>
    </Box>
  );
}

export default Quotation;
