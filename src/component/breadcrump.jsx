import { Box } from '@mui/material';
import React from 'react';
import { BiChevronRight } from 'react-icons/bi'; 

const steps = [
  'Add Contact',
  'Lead Details',
  'Preview and Create Lead',
  'Quotation Details',  
  'Preview and Create'
];

const Breadcrump = () => {
  return (
    <div style={{fontSize: '14px', color: '#4A90E2', display: 'flex', alignItems: 'center'}}>
      {steps.map((step, index) => (
        <span key={index} style={{ display: 'flex', alignItems: 'center' }}>
          {index !== 0 && <BiChevronRight size={18} color="#4A90E2" />}
          {index === steps.length - 1 ? (
            <span style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center',justifyContent:'center' }}>
              <Box sx={{border:'1px solid #CBD7F6',alignItems:'center',padding:'1.3px',borderRadius:'25px'}}>
              <span
                style={{
                    display:"inline-block",
                    height:'24px',
                    width: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#4A90E2',
                    border: '1px solid #CBD7F6',
                    color: 'white',
                    justifyContent:'center',
                    textAlign: 'center',
                    lineHeight: '23px',
                    marginRight:'1px',
                    fontSize: '12px',
                }}
              >
                {index}
              </span>
              </Box>
              {step}
            </span>
          ) : (
            <span>{step}</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrump;
