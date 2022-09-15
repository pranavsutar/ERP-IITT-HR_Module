import React from "react";
import Header from "./Header";
import Foreigntravel from "./Forms/Foreigntravel";

import NocPage from "./FormPages/NocPage";
import Formpage from "./FormPages/EmployeeJoiningPage";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ELEncashmentPage from "./FormPages/ELEncashmentPage";
import RejoiningPage from "./FormPages/RejoiningPage";
import LoanPage from "./FormPages/LoanPage";
import AdvancePage from "./FormPages/AdvancePage"
import InsuranePage from "./FormPages/InsurancePage";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <Box sx={{ "& button": { m: 1 } }}>
          <Button className="mx-2" variant="contained" size="medium" href="/forms/employeejoining">
            Employee Joining
          </Button>
          <Button className="mx-2" variant="contained" size="medium" href="/forms/foreigntravel">
            Foreign Travel Grants
          </Button>
          <Button className="mx-2" variant="contained" size="medium" href="/forms/leaverequest">
            Leave Request
          </Button>

        </Box>
      {/* <NocPage /> */}
      {/* <ELEncashmentPage/> */}
      {/* <RejoiningPage/> */}
      {/* <LoanPage /> */}
      {/* <AdvancePage /> */}
      {/* <InsuranePage/> */}
      {/* <VacationPage /> */}
        
      </div>
    </div>
  );
};

export default Homepage;
