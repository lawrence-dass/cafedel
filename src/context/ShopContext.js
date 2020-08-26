import React, { useState, createContext } from 'react';


export const ShopsContext = createContext();


export const ShopsContextProvider = props => {
  const [shops, setShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null)

  const addShops = shop => {
    setShops([...shops, shop])
  }

  return (
    <ShopsContext.Provider value={{ shops, setShops, addShops, selectedShop, setSelectedShop }}>
      {props.children}
    </ShopsContext.Provider >
  )
}
