import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";

const Employeejoining = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
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
        label="First Name"
        defaultValue=""
        {...register("fname", 
        {
            required:true,
            pattern:{
                minLength:3,
                maxLength: 50,
            }
            
        })}
       
      />

      {/* {errors.fname && <p style={{color:"red"}}> </p>} */}
      <TextField
       
        id="fname"
        label="Middle Name"
        defaultValue=""
        {...register("mname", 
        {
         
            minLength:3,
            maxLength: 50,
        })}
       
      />

 
      <TextField
        
        id="fname"
        label="Last Name"
        defaultValue=""
        {...register("lname", 
        {
            minLength:3,
            maxLength: 50,
        })}
       
      />

      
    </div>
  </Box>

  <button type = "submit"> submit</button>
  </form>
   )
 }
 
 export default Employeejoining