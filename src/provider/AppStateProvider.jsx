import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext"
import data from '../data'

const AppStateProvider = ({ children }) => { 
  const [prototypes, setPrototypes] = useState(data);
  const [orders, setOrders] = useState([]);
  
  const addToOrder = useCallback((id) => {
    console.log(id);
  },[])
  const remove = useCallback((id) => {},[])
  const removeAll = useCallback(() => {},[])

  return (
    <AppStateContext.Provider value={{
      prototypes,
      orders,
      addToOrder,
      remove,
      removeAll
    }}>
      {children}
    </AppStateContext.Provider>
  )
}

export default AppStateProvider;