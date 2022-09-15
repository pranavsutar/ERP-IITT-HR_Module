import React from 'react'
import Box from '@mui/material/Box'; 
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import 'date-fns'
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid'
import DateFnsUils from '@date-io/date-fns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Button from '@mui/material/Button'

const Loan = () => {
    const {selectedDate,setSelectedDate}=React.useState( new Date ("2020-11-11"))
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const handleDateChange=(date)=>{
        setSelectedDate(date);
    }
   return (
    <Paper sx={{ padding: 2 }}>
    
    <div className="container">
        <h2>
          <b>Loan</b>
        </h2>
        <hr></hr>
      </div>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        required
        id="fname"
        label="Employee Name"
        defaultValue=""
        {...register("fname", 
        {
            required:true,
            pattern:{
                minLength:3,
                maxLength: 100,
            }
        })}       
      />

      {/* {errors.fname && <p style={{color:"red"}}> </p>} */}
      <TextField
        required
        id="payroll"
        label="Payroll Number"
        defaultValue=""
        {...register("mname", 
        {
         
            minLength:3,
            maxLength: 100,
        })}
       
      />

    <TextField
        required
        id="department"
        label="Department"
        defaultValue=""
        {...register("mname", 
        {
         
            minLength:3,
            maxLength: 100,
        })}
       
      />

    <TextField
        required
        id="designation"
        label="Designation"
        defaultValue=""
        {...register("mname", 
        {
         
            minLength:3,
            maxLength: 100,
        })}
       
      />    

    <TextField
            required
            id="loan"
            label="Amount in Rupee"
            defaultValue=""
            {...register("mname", 
            {
            
                minLength:3,
                maxLength: 100,
            })}
        
        />    




      {/* {errors.fname && <p style={{color:"red"}}> </p>} */}
     



    </div>
    
    <div className="container">
          <Button type="upload" variant="outlined">
            {" "}
            Upload Required Document
          </Button>
    </div>

  </Box>
  <br />
    <div className="container">
          <Button type="submit" variant="contained">
            {" "}
            Apply
          </Button>
    </div>
  </form>
  </Paper>
   )
 }
 
 export default Loan