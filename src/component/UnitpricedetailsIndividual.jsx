import React from "react";
import { Box, Typography } from "@mui/material";

const UnitpricedetailsIndividual = ({ billItems, finalTotal }) => {
  return (
    <Box
    //   width="400px"
      minWidth="370px"
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      padding="20px"
      borderRadius="8px"
      bgcolor="#F8F9FB"
      marginTop={'15px'}
    >
        <Box height={'465px'}>
      <Typography
        sx={{ fontSize: '14px', fontWeight: 'bold',  color: '#091B29' }}
      >
        UNIT PRICING DETAILS
      </Typography>

      {billItems.map((item, index) => (
        <Box
          key={index}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          borderBottom="1px solid #E4E8EE"
          padding="12px 0"
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography sx={{ fontSize: '14px', color: '#4E5A6B', fontWeight: 'semibold' }}>
              {item.billName}
            </Typography>
            <Typography sx={{ fontSize: '14px', color: '#091B29', fontWeight: 'bold' }}>
              ${item.amount}
            </Typography>
          </Box>
          {item.discount && (
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography sx={{ fontSize: '12px', color: '#98A0AC', fontStyle: 'italic' }}>
                Discount
              </Typography>
              <Typography sx={{ fontSize: '12px', color: '#98A0AC' }}>
                {item.discount}%
              </Typography>
            </Box>
          )}
        </Box>
      ))}
</Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="12px 5px"
        marginTop="16px"
        bgcolor="#E4E8EE"
        borderRadius="4px"
      >
        <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#091B29' }}>
          Final Total
        </Typography>
        <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#091B29' }}>
          ${finalTotal}
        </Typography>
      </Box>
    </Box>
  );
};

export default UnitpricedetailsIndividual;
