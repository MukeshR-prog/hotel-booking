import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import '../styles/Datedetails.css';

function Datedetails() {
    const date_array = [
        {
            des :'LEASE START DATE',
            date: '30 Jan 22'
            
            
        },
        {
            date: '30 Jan 23',
            des :'LEASE END DATE',
            
        },
        {
            date: '30 Jan 23',
            des :'RENT START DATE',
           
        },
        {
            date: '90 Days',
            des :'GRACE PERIOD',
            status: '(Beginning)'
        },
    ];

    return (
        <Box>
            <Box>
                <Typography className='date-head' marginBottom={'14px'}>Quotation Details</Typography>
            </Box>
            <Grid container spacing={3}>
                {date_array.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box sx={{ textAlign: 'start' ,display:'flex',flexDirection:'column',gap:'5px'}}>
                            <Typography className='date-description' sx={{fontSize:'9px',fontWeight:'semibold'}}> {item.des}</Typography>
                            <Box sx={{display:'flex'}}>
                            <Typography fontSize={'12px'} >{item.date}</Typography>
                            <Typography className='date-begin' fontSize={'12px'} fontWeight={'semibold'}>{item.status}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Datedetails;
