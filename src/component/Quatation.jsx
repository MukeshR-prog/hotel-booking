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
 
  const data = [
    { description: "Total Amount", qty: "3", amount: "$ 3,600.00" ,border: "1px solid #E4E8EE",pad:'8px 16px 8px 16px',col:'#091B29'},
    { description: "Total Discount", qty: "10%", amount: "- $ 100.00",border:'none' ,pad:'8px 16px 8px 16px',col:'#4E5A6B'},
    { description: "Total Refundable", qty: "0%", amount: "$ 0" ,border: "1px solid #E4E8EE",pad:'16px 16px 16px 16px',col:'#091B29'},
    { description: "Total Tax", qty: "18%", amount: "$ 648.00",border: "1px solid #E4E8EE" ,pad:'16px 16px 16px 16px',col:'#091B29'},
  ];

  
  const quoteAmount = "$ 4,148.00";

  return (
    <Box sx={{ borderRadius: "8px", padding: "5px 5px 0 5px" ,margin:'10px 10px 0 10px'}}>
     
      <Typography sx={{ color: "#4E5A6B", fontSize: "14px", mb: 2 }}>
        Quotation Summary
      </Typography>

      
      <Box sx={{height:'439px',display:'flex',flexDirection:'column',justifyContent:'space-between',backgroundColor: "#F7F8FA",alignItems:'center'}}>
      <TableContainer style={{  padding: "5px",margin:'5px' ,alignItems:'center'}}>
        <Table>
          <TableBody>
          
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

           
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    color: "#4E5A6B",
                    fontSize: "14px",
                    borderBottom: "none",
                    fontWeight: "semibold",
                    borderTop: row.border,
                    padding:row.pad
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
                    borderTop: row.border,
                    padding:row.pad
                  }}
                >
                  {row.qty}
                </TableCell>
                <TableCell
                  sx={{
                    
                    fontSize: "14px",
                    borderBottom: "none",
                    textAlign: "right",
                    fontWeight:'bold',
                    borderTop: row.border,
                    padding:row.pad,
                    color:row.col
                  }}
                >
                  {row.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    
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
