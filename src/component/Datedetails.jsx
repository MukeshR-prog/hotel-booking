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
                        <Box elevation={3} style={{ textAlign: 'start' }}>
                            <Typography className='date-description' fontSize={'8px'}> {item.des}</Typography>
                            <Box sx={{display:'flex'}}>
                            <Typography fontSize={'12px'} >{item.date}</Typography>
                            <Typography className='date-begin' fontSize={'12px'} >{item.status}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Datedetails;
