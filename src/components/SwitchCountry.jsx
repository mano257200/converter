import React, { useContext } from 'react'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Grid , Button} from '@mui/material'
import { alignProperty } from '@mui/material/styles/cssUtils';
import { CurrencyContext } from '../context/CurrencyContext';
const SwitchCountry = () => {
  const {
    fromcurrency, setfromCurrency, tocurrency, settoCurrency
  }=useContext(CurrencyContext);

  const handleSwitch=()=>
{
  setfromCurrency(tocurrency);
  settoCurrency(fromcurrency);
}
  return (
    <Grid item xs={12} md="auto">
        <Button onClick={handleSwitch}>
            <CompareArrowsIcon/>
        </Button>
    </Grid>
  )
}

export default SwitchCountry