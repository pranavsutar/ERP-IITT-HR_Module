import React from 'react'
import Box from '@mui/material/Box'; 
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import 'date-fns'
import Grid from '@mui/material/Grid'
import DateFnsUils from '@date-io/date-fns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
const Foreigntravel = () => {
    const {selectedDate,setSelectedDate}=React.useState( new Date ("2020-11-11"))
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const handleDateChange=(date)=>{
        setSelectedDate(date);
    }
   return (
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
    <button type='upload'>Please upload proof of invitation/confirmation of travel documents here</button>

  </Box>

  <button type = "submit"> Request for NOC</button>
  </form>
   )
 }
 
 export default Foreigntravel