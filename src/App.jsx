import { useState } from 'react'
import './App.css'
import { Box,Button } from '@mui/material';
import Dropdown from './component/dropdown'
import Toppagehead from './component/toppagehead';
import Breadcrump from './component/breadcrump';
import Userdetail from './component/userdetail';
import Datedetails from './component/Datedetails';
import Unitdetails from './component/Unitdetails';
import Quatation from './component/Quatation';

function App() {
  

  return (
    <>
      <div  className="Top-page">
        <div className="top-header">
        <Toppagehead/>
        </div>
        <div className='front-content'>
          <div className='bread-crump'>
          <Breadcrump/>
          </div>
          <div className='content'>
          <div className='content-three'>
            <div className='content-1'><Userdetail/><Datedetails/></div>
            <div className='content-2'><Unitdetails/></div>
            <div className='content-3'><Quatation/></div>
          </div>
          <div className='content-bottom'>
            <div>
              <Button style={{
                color:'#091B29',
                textTransform:'none',
                border:'1px solid #E4E8EE',
                borderRadius:'10px',
                padding:'5px 10px',
                fontWeight:'bold',
              }}>Previous</Button>
                 </div>
            <div className='bot-button'>
            <Button style={{
                color:'#091B29',
                textTransform:'none',
                border:'1px solid #E4E8EE',
                borderRadius:'10px',
                padding:'5px 10px',
                fontWeight:'bold',
              }}>Cancel</Button>
              <Button style={{
                color:'white',
                backgroundColor:'#5078E1',
                textTransform:'none',
                border:'1px solid #E4E8EE',
                borderRadius:'10px',
                padding:'5px 10px',
                fontWeight:'bold',
              }}>Create Quotation</Button>
                 </div>
          </div>
            </div>
         
        </div>
      </div>
    </>
  )
}

export default App
