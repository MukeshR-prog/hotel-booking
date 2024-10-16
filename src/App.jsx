import { useState } from 'react'
import './App.css'
import { Box } from '@mui/material';
import Dropdown from './component/dropdown'
import Toppagehead from './component/toppagehead';
import Breadcrump from './component/breadcrump';
import Userdetail from './component/userdetail';
import Datedetails from './component/Datedetails';

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
            <div className='content-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum velit commodi veritatis! Animi rem quo sunt, vero dolorum illum numquam, nulla magnam illo aspernatur porro doloribus possimus eum odit?</div>
            <div className='content-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus officiis laudantium perspiciatis odio ad, voluptatum illum debitis esse ex saepe laborum, cum sapiente vel sunt. Quisquam sint ipsam totam?</div>
          </div>
            </div>
         
        </div>
      </div>
    </>
  )
}

export default App
