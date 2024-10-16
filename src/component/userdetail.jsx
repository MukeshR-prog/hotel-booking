import React from 'react';
import '../styles/userdetail.css'; 
import { Avatar, Badge,Box, Typography } from '@mui/material';
import profile from '../assets/leetprof.avif';

const Userdetail = () => {
  const details = {
    name: "Tom Cruise",
    imageUrl: "https://via.placeholder.com/150",
    contact: "+91 9090808012",
    email: "Tomcruise2515@mail.com",
    status: "Prospect"
  };

  return (
    <Box className='user-main-card'>
      <Typography className='user-head' sx={{ fontSize: '14px' }}>Lead Details</Typography>
    <div className="card">
      <Avatar className="avatar" src={profile} />
      <div className="details">
            <div className="name-status">
            <span className="name">{details.name}</span>
            <div className="chip">{details.status}</div>
            </div>
        <div className='contact-details'>
            <div className="contact">
                {details.contact}
            </div>
            <Badge className="dot" /> 
            <div className="email">
                {details.email}
            </div>
      </div>
      </div>
    </div>
    </Box>
  );
};

export default Userdetail;
