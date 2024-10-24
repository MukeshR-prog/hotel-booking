import React from 'react';
import './App.css'
import Estate from './Estate';
import { TotalValueProvider } from './context';
import Mainpage from './mainpage';

function App() {
  

  return (

     <TotalValueProvider>
      {/* <Estate /> */}
      <Mainpage/>
    </TotalValueProvider>

  )
}

export default App
