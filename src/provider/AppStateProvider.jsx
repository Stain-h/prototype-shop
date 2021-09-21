import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext"
import data from '../data'

const AppStateProvider = ({ children }) => { 
  const [prototypes, setPrototypes] = useState(data);
  const [orders, setOrders] = useState([]);
  
  // { id, quantity : 1 }
  // orders에 id가 존재한다면 quantity만 +1 
  // orders에 id가 존재하지 않는다면 id : id, quantity : 1 

  const addToOrder = useCallback((id) => {
    setOrders((orders) => {
      const finded = orders.find((order) => order.id === id);
      if(finded === undefined) {
        return [...orders, { id, quantity: 1 }];
      }else {
        return orders.map((order) => {
          if(order.id === id){
            return { 
              id,
              quantity: order.quantity + 1
            };
          }else {
            return order;
          }
        })
      }
    })
  },[])

  const remove = useCallback((id) => {
    console.log(id);
  },[])
  
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