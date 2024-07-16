import { createContext, useContext, useState } from "react"

const initialValue = {
  count : 0
}
const countContext = createContext(initialValue)
console.log(countContext)

// Provider
const CountProvider = ({children}) => {

  const[ count , setCount] = useState(0)

  return (
    <countContext.Provider value={{count, setCount}}>
    {children}
    </countContext.Provider>
  )

}

// Customer
const useCount = () => useContext(countContext)

export {useCount, CountProvider}
