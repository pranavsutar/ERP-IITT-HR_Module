
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import EmployeeJoiningPage from './components/FormPages/EmployeeJoiningPage'
import InternationalTravelPage from "./components/FormPages/InternationalTravelPage"
import LeaveRequestPage from './components/FormPages/LeaveRequestPage'



const App = () => {
  return (
    <Router>
    <Routes>
      <Route exact path = "/" element={<Homepage/>} ></Route>
      <Route exact path = "/forms/employeejoining" element={<EmployeeJoiningPage/>} ></Route>
      <Route exact path = "/forms/internationaltravel" element={<InternationalTravelPage/>} ></Route>
      <Route exact path = "/forms/leaverequest" element={<LeaveRequestPage/>} ></Route>
    </Routes>
  </Router>

  )
}

export default App