import React, { createContext, useState } from 'react';


export const TotalValue = createContext();


export const TotalValueProvider = ({ children }) => {
    
  const [totalValue, setTotalValue] = useState(0);  
  return (
    <TotalValue.Provider value={{ totalValue, setTotalValue }}>
      {children}
    </TotalValue.Provider>
  );
};
