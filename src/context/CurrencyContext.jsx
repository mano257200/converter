import {createContext, useState} from 'react'

export const CurrencyContext=createContext();
const CurrencyProvider = ({children}) => {
    const [fromcurrency, setfromCurrency] = useState("🇮🇳 INR - India")
  const [tocurrency, settoCurrency] = useState("🇷🇺 RUB - Russia")
  const [firstAmount, setFirstAmount] = useState()
  // const [secondAmount, setsecondAmount] = useState(0)


  const value={
    fromcurrency, setfromCurrency, tocurrency, settoCurrency,firstAmount,setFirstAmount
  }
  return (
    <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
  )
}

export default CurrencyProvider