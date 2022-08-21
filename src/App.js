
import React from 'react'
import Homepage from './components/Homepage'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'


const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Homepage/>
    </LocalizationProvider>
  )
}

export default App