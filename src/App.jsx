import { useContext, useEffect, useState } from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import SelectCountry from './components/SelectCountry'
import InputAmount from './components/InputAmount'
import SwitchCountry from './components/SwitchCountry'
import {CurrencyContext} from './context/CurrencyContext'
import { shadows } from '@mui/system';
import axios from 'axios'

function App() {
  
  const {  fromcurrency, setfromCurrency, tocurrency, settoCurrency, firstAmount, setFirstAmount }=useContext(CurrencyContext); 
  console.log(firstAmount)
  const [resultCurency, setResultCurrency]=useState(0);
  const codeFromCurrency=fromcurrency.split(" ")[1];
  const codeToCurrency=tocurrency.split(" ")[1];

  console.log(resultCurency)
  useEffect(()=>{
    if(firstAmount){
      axios("https://api.freecurrencyapi.com/v1/latest", {
        params: {
          apikey:"fca_live_a1GU3N7R1G9fpwLwGct2wQkTit5dIg113KFEsjDQ",
          base_currency:codeFromCurrency,
          currencies:codeToCurrency
        }
      })
      .then(response=> setResultCurrency(response.data.data[codeToCurrency]))
      .catch(error=>console.log(error))
    }
  },[firstAmount, fromcurrency, tocurrency])



  return (
    <>
    <div className='body_tag'>
    <Container maxWidth="md"  sx={{backgroundColor:"white",marginBottom:"2rem",marginTop:"5rem",borderRadius:"1rem",boxShadow: 3}}  >
      <Typography variant='h5' sx={{marginTop:"10rem",textAlign:"center",paddingTop:"2rem"}}>₹ ⇌ $</Typography>
      <Typography variant='h6' sx={{marginBottom:"1rem",textAlign:"center"}}>Currency Converter</Typography>

      <Grid container spacing={2} sx={{marginBottom:"2rem"}}> 
      <InputAmount />
      <SelectCountry value={fromcurrency} setValue={setfromCurrency} label="From"/>
      <SwitchCountry sx={{align:"center"}}/>
      <SelectCountry value={tocurrency} setValue={settoCurrency} label="To" />
     <br></br>
      </Grid>
      {
        firstAmount ?
        (
          <Box sx={{textAlign:"center"}}>
            <Typography>{firstAmount}  {fromcurrency} is equivalent for</Typography>
            <Typography variant='h5' sx={{marginTop:"5px", fontWeight:"bold",marginBottom:"1rem"}}>{(resultCurency*firstAmount).toFixed(2)}  {tocurrency}</Typography>
          </Box>
        ):(<div><br></br></div>)
        }
        <Grid sx={{textAlign:"center",paddingBottom:"2rem"}}>
        Designed & Developed By : Ratna | Hari | Sudharssan | Pradeep | Vamsi
      </Grid>
    </Container>
    </div>
    </>
  )
}

export default App
