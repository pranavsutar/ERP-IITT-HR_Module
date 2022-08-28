import React from "react";

import PageHeader from "../PageHeader";
import PersonIcon from "@mui/icons-material/Person";
import Insurance from "../Forms/Insurance";
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import Header from "../Header";
const InsurancePage = () => {
  return (
    <div>
    

      <div className="container my-5">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Insurance/>
    </LocalizationProvider>
        
      </div>
    </div>
  );
};

export default InsurancePage;
