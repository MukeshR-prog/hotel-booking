import { Box, Typography } from '@mui/material';
import React from 'react';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";

function Primesecond({ onItemClick }) {
    const primelist = [
        {
            serial: '01',
            text: 'Primary',
            dark: '#B3776D',
            light: '#FEEAEA80',
        },
        {
            serial: '02',
            text: 'Secondary',
            dark: '#896DB3',
            light: '#EDE4FE80',
        },
        {
            serial: '03',
            text: 'One Time Charges',
            dark: '#6DAFB3',
            light: '#DBF0F180',
        },
        {
            serial: '04',
            text: 'Refundables',
            dark: '#6D80B3',
            light: '#E4EDFF80',
        },
        {
            serial: '05',
            text: 'Inventory Item',
            dark: '#B3A16D',
            light: '#FFFAD880',
        },
        {
            serial: '06',
            text: 'Parking Slot',
            dark: '#B3776D',
            light: '#FEEAEA80',
        }
    ];

    return (
        <Box>
            {primelist.map((item, index) => (
                <Box 
                    key={index} 
                    sx={{
                        height:'40px',
                        width: '370px', 
                        padding: '15px', 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        backgroundColor: item.light, 
                        marginTop: '15px',
                        borderRadius: '5px',
                        cursor: 'pointer' // Add cursor for clickable effect
                    }}
                    onClick={() => onItemClick(item)} // Call the handler with the clicked item
                >
                    <Box sx={{ display: 'flex', gap: '10px', alignItems:'center' }}>
                        <Typography sx={{ alignItems:'center', backgroundColor: item.dark, fontSize:'10px', fontWeight:'bold', color:'white', borderRadius:'50%', height:'10px', width:'10px', padding:'4px 6px 6px 6px' }}>{item.serial}</Typography>
                        <Typography sx={{ color: item.dark, fontSize:'14px', fontWeight:'semibold' }}>{item.text}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '15px', alignItems:'center' }}>
                        <IoIosInformationCircleOutline style={{color:'#CED3DD', fontSize:'16px'}} />
                        <FaChevronRight style={{ color: item.dark }} />
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default Primesecond;
