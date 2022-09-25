/**
 * National/ International Travel -->
 *
 *  REQUIREMENTS
 *    --> Employee Details
 *    --> Date of leave starting
 *    --> date of arrival
 *
 *    --> Reason for Travel
 *    --> Event for Travel
 *    --> Certificate upload 
 */

 import React, { useState, useEffect } from "react";

 import {Link} from "react-router-dom"
 import { ErrorMessage } from "@hookform/error-message";
 import Box from "@mui/material/Box";
 import TextField from "@mui/material/TextField";
 import { useForm } from "react-hook-form";
 import "date-fns";
 import Button from "@mui/material/Button";
 import Paper from "@mui/material/Paper";
 import Grid from "@mui/material/Grid";
 import DateFnsUils from "@date-io/date-fns";
 import { DatePicker } from "@mui/x-date-pickers/DatePicker";
 import FormControlLabel from '@mui/material/FormControlLabel';
 import Checkbox from '@mui/material/Checkbox';
 
 
 const InternationalTravel = () => {
   const [leavingDate, setleavingDate] = useState(null);
   const [returnDate, setreturnDate] = useState(null);
   const {
     register,
     handleSubmit,
     watch,
     formState: { errors },
   } = useForm();
 
   const submitdata = async (formdata) => {
     
     const response = await fetch("http://localhost:8000/api/internationaltravel", {
       method: "POST",
       headers: {
        //  "Content-Type": "application/json", 
        //  'Content-Type': 'multipart/form-data'
       },
       body: formdata
     });
     
     const resp = await response.json();
     if (resp.success === "true") {
       alert("Your ticket has been generated! We will get back to you once the verification is done");
       console.log(resp.ticket);
     } else {
       alert(resp.msg);
     }
   };
 
   const onSubmit = (data) => {
     console.log(data);

    // need to create a formdata to submit such documents
    let formdata = new FormData()
    formdata.append("name", data.fname);
    formdata.append("payroll", data.payroll);
    formdata.append("department", data.department);
    formdata.append("designation", data.designation);
    formdata.append("event", data.eventtoattend);
    formdata.append("source", data.source);
    formdata.append("dest", data.dest);
    formdata.append("leaving", data.leaving);
    formdata.append("arriving", data.arriving);
    console.log(data.letter);
    formdata.append("letter", data.letter[0]);

    console.log(...formdata)

     submitdata(formdata);
   }
 
 
 
 
   return (
     <Paper
       className="animate__animated animate__fadeInUp"
       sx={{ padding: 2 }}
       style={{
         backgroundColor: "rgb(0,0,0,0.5)",
         color: "whitesmoke",
         borderRadius: "10px",
         maxWidth: "90vw",
         maxHeight: "90vh",
         overflow: "scroll",
       }}
     >
       <div className="container">
         <h2>
           <b>National/ International Travel</b>
         </h2>
         <hr></hr>
       </div>
       <form onSubmit={handleSubmit(onSubmit)}>
         <Box
           component="form"
           sx={{
             "& .MuiTextField-root": { m: 1, width: "25ch" },
           }}
           noValidate
           autoComplete="off"
         >
           <div>
             <TextField
               required
               InputLabelProps={{
                 className: "textfield_label",
               }}
               InputProps={{
                 className: "textfield_label",
               }}
               id="fname"
               label="Employee Name"
               defaultValue=""
               {...register("fname", {
                 required: "Employee Name required",
                 pattern: {
                   minLength: 3,
                   maxLength: 100,
                 },
               })}
             />
 
             <ErrorMessage
               errors={errors}
               name="fname"
               render={({ message }) => <p className="errormsg">{message}</p>}
             />
 
             <TextField
               required
               InputLabelProps={{
                 className: "textfield_label",
               }}
               InputProps={{
                 className: "textfield_label",
               }}
               id="payroll"
               label="Payroll Number"
               defaultValue=""
               {...register("payroll", {
                 required: "Payroll Number required",
                 minLength: 3,
                 maxLength: 100,
               })}
             />
 
             <ErrorMessage
               errors={errors}
               name="payroll"
               render={({ message }) => <p className="errormsg">{message}</p>}
             />
 
             <TextField
               required
               InputLabelProps={{
                 className: "textfield_label",
               }}
               InputProps={{
                 className: "textfield_label",
               }}
               id="department"
               label="Department"
               defaultValue=""
               {...register("department", {
                 required: "Department required",
                 minLength: 3,
                 maxLength: 100,
               })}
             />
 
             <ErrorMessage
               errors={errors}
               name="department"
               render={({ message }) => <p className="errormsg">{message}</p>}
             />
 
             <TextField
               required
               InputLabelProps={{
                 className: "textfield_label",
               }}
               InputProps={{
                 className: "textfield_label",
               }}
               id="designation"
               label="Designation"
               defaultValue=""
               {...register("designation", {
                 required: "designation required",
                 minLength: 3,
                 maxLength: 100,
               })}
             />
 
             <ErrorMessage
               errors={errors}
               name="designation"
               render={({ message }) => <p className="errormsg">{message}</p>}
             />
 
             <TextField
                required
               InputLabelProps={{
                 className: "textfield_label",
               }}
               InputProps={{
                 className: "textfield_label",
               }}
               id="eventtoattend"
               label="Event to attend"
               defaultValue=""
               {...register("eventtoattend", {
                 required:"Event to attend Required",
                 minLength: 3,
                 maxLength: 200,
               })}
             />

            <ErrorMessage
               errors={errors}
               name="eventtoattend"
               render={({ message }) => <p className="errormsg">{message}</p>}
             />
 
             <Box>
               <TextField
                 required
                 InputLabelProps={{
                   className: "textfield_label",
                 }}
                 InputProps={{
                   className: "textfield_label",
                 }}
                 id="source"
                 label="Source Location"
                 defaultValue=""
                 {...register("source", {
                   required: "Source Location required",
                   minLength: 3,
                   maxLength: 200,
                 })}
               />
 
               <TextField
                 required
                 InputLabelProps={{
                   className: "textfield_label",
                 }}
                 InputProps={{
                   className: "textfield_label",
                 }}
                 id="dest"
                 label="Destination Location"
                 defaultValue=""
                 {...register("dest", {
                   required: "Destination Location required",
                   minLength: 3,
                   maxLength: 200,
                 })}
               />
             </Box>
             <ErrorMessage
               errors={errors}
               name="source"
               render={({ message }) => <p className="errormsg">{message}</p>}
             />
 
 
             <ErrorMessage
               errors={errors}
               name="dest"
               render={({ message }) => <p className="errormsg">{message}</p>}
             />  
             <Grid>
               <DatePicker
                 style={{ backgroundColor: "gray" }}
                 label="Leaving Date"
                 value={leavingDate}
                 onChange={(newValue) => {
                   setleavingDate(newValue);
                 }}
                 renderInput={(params) => (
                   <TextField
                     required
                     style={{ backgroundColor: "gray" }}
                     // InputLabelProps={{
                     //   className: "textfield_label",
                     // }}
                     // InputProps={{
                     //   className: "textfield_label",
                     // }}
 
                     {...params}
                     {...register("leaving", {
                      //  required: "Leaving Date required",
                     })}
                   />
                 )}
               />
 
               <DatePicker
                 style={{ backgroundColor: "gray" }}
                 label="Arriving Date"
                 value={returnDate}
                 onChange={(newValue) => {
                   setreturnDate(newValue);
                 }}
                 renderInput={(params) => (
                   <TextField
                     required
                     style={{ backgroundColor: "gray" }}
                     // InputLabelProps={{
                     //   className: "textfield_label",
                     // }}
                     // InputProps={{
                     //   className: "textfield_label",
                     // }}
 
                     {...params}
                     {...register("arriving", {
                      //  required: "Arriving Date required",
                     })}
                   />
                 )}
               />
             </Grid>
             <ErrorMessage
               errors={errors}
               name="leaving"
               render={({ message }) => <p className="errormsg">{message}</p>}
             />
 
             <ErrorMessage
               errors={errors}
               name="arriving"
               render={({ message }) => <p className="errormsg">{message}</p>}
             />
 
           </div>
         </Box>
 
         
        <div className="my-5">
        <Button variant="contained" component="label">
        Upload Invitation Letter/ Proof of Travel*
        <input hidden multiple type="file" 
        name='letter' 
        id='file'
        
        {...register("letter", {
          required: "Invitation Letter Required"
        })}
        />
      </Button>

      <ErrorMessage
           errors={errors}
           name="letter"
           render={({ message }) => <p className="errormsg">{message}</p>}
         />


        </div>

        

          <br/>
         <Link  to="/" >Terms and Conditions</Link>
         <br/>
         <FormControlLabel  control={<Checkbox required defaultChecked />} label="I agree with the the terms and conditions" />
 
         <br />
         <Button class="btn btn-success my-5" type="submit">
           {" "}
           Submit Leave Request
         </Button>
       </form>
     </Paper>
   );
 };
 
 export default InternationalTravel;
 