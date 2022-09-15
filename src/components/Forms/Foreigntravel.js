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

const Foreigntravel = () => {
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
          <b>Foreign Travel Grant</b>
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
        id="fname"
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
        id="fname"
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
        id="fname"
        label="Designation"
        defaultValue=""
        {...register("mname", 
        {
         
            minLength:3,
            maxLength: 100,
        })}
       
      />    


 
      <TextField
        
        id="fname"
        label="Event for which travelling"
        defaultValue=""
        {...register("lname", 
        {
            minLength:3,
            maxLength: 200,
        })}
       
      />

      <Grid container justify='space-around'>
          <DatePicker
          label="Date of departure"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(props) => (
            <TextField {...props} />
          )} />
      </Grid>

      <Grid container justify='space-around'>
          <DatePicker
          label="Date of Arrival"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(props) => (
            <TextField {...props} />
          )} />
      </Grid>


      <TextField
        required
        id="fname"
        label="Country to which travelling"
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
        id="fname"
        label="City"
        defaultValue=""
        {...register("mname", 
        {
         
            minLength:3,
            maxLength: 100,
        })}
       
      />



    </div>
    <br />
    <Button variant="outlined" type='upload' color='success'>Please upload proof of invitation/confirmation of travel documents here</Button>
    

  </Box>
        <br/>
  <Button variant="outlined" type = "submit" color="primary"> Request for NOC</Button>
  </form>
  </Paper>
   )
 }
 
 export default Foreigntravel