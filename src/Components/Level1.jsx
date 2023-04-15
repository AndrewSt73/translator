import React, { useState } from 'react';

export const StoreContext = React.createContext(null)

export default ({ children }) => {
    const[boards, setBoards] = useState([
        {id: 1, title: "n1", items: [{id: 1, title: "1"},{id: 2, title: "2"},{id: 3, title: "3"},
        {id: 4, title: "4"},{id: 5, title: "5"},{id: 6, title: "6"},
        {id: 7, title: "7"},{id: 8, title: "8"},{id: 9, title: "9"},
        {id: 10, title: "10"},{id: 11, title: "11"},{id: 12, title: "12"},
        {id: 13, title: "13"},{id: 14, title: "14"},{id: 15, title: "15"},
        {id: 16, title: "16"},{id: 17, title: "17"},{id: 18, title: "18"}
      
      
        ]},
        {id: 2, title: "n1", items: [{id: 0, title: " "},{id: 0, title: " "},{id: 0, title: " "},{id: 0, title: " "}]},
        
    
      ])

      const store = {
        boards: [boards, setBoards]
        
      }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}