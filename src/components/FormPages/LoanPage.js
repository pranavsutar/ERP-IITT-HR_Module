import React from "react";

import PageHeader from "../PageHeader";
import PersonIcon from "@mui/icons-material/Person";
import Loan from "../Forms/Loan";
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import Header from "../Header";
const LoanPage = () => {
  return (
    <div>
    
      <div className="container my-3">
        <PageHeader
          title="Page Title"
          subtitle="Page Description"
          icon={<PersonIcon />}
        />
      </div>
      <div className="container my-5">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Loan/>
    </LocalizationProvider>
        
      </div>
    </div>
  );
};

export default LoanPage;
