import React from "react";
import Header from "./Header";
import 'animate.css';


import { FaPiggyBank, FaUniversity, FaFlagUsa,FaRupeeSign, FaPassport } from 'react-icons/fa';
import { FcLeave, FcManager } from 'react-icons/fc';

import { GrUpgrade } from 'react-icons/gr';
import { TbBeach } from 'react-icons/tb';
import { MdUpgrade, MdAttachMoney,MdFlightTakeoff,MdCardTravel } from 'react-icons/md';
import {Link} from "react-router-dom"
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
    <div style={{
      backgroundImage:"url(https://images.unsplash.com/photo-1583373834259-46cc92173cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80)",
      backgroundPosition:"center",
      minHeight:"100vh",
      backgroundSize:"cover",
      backgroundRepeat:"none"
      }}>
      <Header />
      <div className="container" style={{
        minHeight:"100vh", 
        minWidth:"100vw" ,
        
        backgroundImage:"linear-gradient(to right, rgb(0,0,0,1) , rgb(0,0,0,0))"
      
        }}>
        <div className="container">
          <div className="headname animate__animated animate__fadeInLeft" style={{
            
            color:"whitesmoke",
            fontSize:"8vh",
            minHeight:"30vh",
            maxWidth:"50vw",
            display:"flex",
            alignItems:"left",
            justifyContent:"center",
            flexDirection:"column"
          }}>
              Welcome to ERP
              <hr style={{width:"20vw", backgroundColor:"orange", height:"5px"}}></hr>
          </div>

          <div className="animate__animated animate__fadeIn animate__delay-1s" style={{maxWidth:"30vw", color:"whitesmoke", fontSize:"3vh"
        }}>
          <div className="buttonclass ">
               <Link to="/forms/employeejoining" style={{textDecoration:"none", color:"gray"}}>
                  <FaUniversity/> Employee Joining
               </Link>
          </div>


          <div className="buttonclass my-2">
               <Link to="/" style={{textDecoration:"none", color:"gray"}}>
                  <FcLeave/> Leave Record
               </Link>
          </div>

          <div className="buttonclass my-2">
               <Link to="/" style={{textDecoration:"none", color:"gray"}}>
                  <MdFlightTakeoff/> Rejoining after Vacation
               </Link>
          </div>

          <div className="buttonclass my-2">
               <Link to="/forms/leaverequest" style={{textDecoration:"none", color:"gray"}}>
                  <MdCardTravel/> Apply for Leave Travel concession
               </Link>
          </div>

          <div className="buttonclass my-2">
               <Link to="/" style={{textDecoration:"none", color:"gray"}}>
                  <FcManager/> Promotion/Transfer Details
               </Link>
          </div>

          <div className="buttonclass my-2">
               <Link to="/" style={{textDecoration:"none", color:"gray"}}>
                 <MdAttachMoney/> Annual Increment
               </Link>
          </div>

          <div className="buttonclass my-2">
               <Link to="/" style={{textDecoration:"none", color:"gray"}}>
                 <MdUpgrade/> Financial Upgrade
               </Link>
          </div>

          <div className="buttonclass my-2">
               <Link to="/" style={{textDecoration:"none", color:"gray"}}>
                 <TbBeach/> Summer/Winter Vacation
               </Link>
          </div>

          <div className="buttonclass my-2">
               <Link to="/forms/internationaltravel" style={{textDecoration:"none", color:"gray"}}>
                  <FaFlagUsa/> National/ International Travel
               </Link>
          </div>

          <div className="buttonclass my-2">
               <Link to="/" style={{textDecoration:"none", color:"gray"}}>
                  <FaPassport/> NOC for VISA/ passport
               </Link>
          </div>

          <div className="buttonclass my-2">
               <Link to="/" style={{textDecoration:"none", color:"gray"}}>
                  <FaRupeeSign/> EL Encashments
               </Link>
          </div>

          <div className="buttonclass my-2">
               <Link to="/" style={{textDecoration:"none", color:"gray"}}>
                  <FaPiggyBank/> Loans and Advances
               </Link>
          </div>
          </div>

          {/* <Button className="mx-2" variant="contained" size="medium" href="/forms/employeejoining">
            Employee Joining
          </Button>
          <Button className="mx-2" variant="contained" size="medium" href="/forms/foreigntravel">
            Foreign Travel Grants
          </Button>
          <Button className="mx-2" variant="contained" size="medium" href="/forms/leaverequest">
            Leave Request
          </Button> */}

          </div>
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
