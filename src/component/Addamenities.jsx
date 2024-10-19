import { Badge, Box, Radio, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import estate from '../assets/estate.jpeg'
export default function Addamenities({name,price,valid}) {
    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
  return (
    <Box>
        <Box sx={{width:'400px',alignItems:'center',display:'flex',justifyContent:'space-between',border:'1px solid #E4E8EE',
           borderTopLeftRadius:'10px',borderTopRightRadius:'10px',borderBottomLeftRadius: !checked ? '10px':'none',borderBottomRightRadius: !checked ? '10px':'none'
        }}>
            <Box sx={{display:'flex',padding:'10px 10px 7px 10px',gap:'5px'}}>
                <Box>
                    <img src={estate} style={{width:'48px',height:'48px' ,borderRadius:'5px'}}/>
                </Box>
                <Box>
                    <Typography sx={{fontSize:'16px',fontWeight:'semibold'}}>{name}</Typography>
                    <Box sx={{fontSize:'12px',color:'#4E5A6B',display:'flex',alignItems:'center',gap:'10px'}}>
                        <Typography>{price}</Typography>
                        <Badge className='dot'></Badge>
                        <Typography>{valid}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
            <Switch
        checked={checked}
        onChange={handleChange}
        sx={{
          '& .MuiSwitch-switchBase': {
            '&.Mui-checked': {
              color: '#5AC782', // Change the switch handle color
            },
            '&.Mui-checked + .MuiSwitch-track': {
              backgroundColor: '#5AC782', // Change track color when checked
            },
          },
          '& .MuiSwitch-track': {
            backgroundColor: '#98A0AC', // Default track color when unchecked
            borderRadius: '20px',
          },
        }}
      />         
            </Box>
        </Box>
        {
            checked && (
                <Box sx={{display:'flex',width:'400px',alignItems:'center',borderBottom:'1px solid #E4E8EE',borderRight:'1px solid #E4E8EE',borderLeft:'1px solid #E4E8EE',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px'}}>
                   <Radio size='small'></Radio>
                   <Typography sx={{color:'#4E5A6B',fontSize:'12px'}}>Free applicability</Typography>
                </Box>
            )
        }
    </Box>
  )
}
