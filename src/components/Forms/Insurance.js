import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Dialog from "./Dialog";
import Educationdetails from "./Educationdetails";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const Insurance = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const handleClick = () => {};
  return (
    <Paper sx={{ padding: 2 }}>
      <div className="container">
        <h2>
          <b>Insurance</b>
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
          <div className="container">
            <div>Personal Details</div>
            <hr></hr>
            <TextField
              required
              id="fname"
              label="First Name"
              defaultValue=""
              {...register("fname", {
                required: true,
                pattern: {
                  minLength: 3,
                  maxLength: 50,
                },
              })}
            />

            {/* {errors.fname && <p style={{color:"red"}}> </p>} */}
            <TextField
              id="mname"
              label="Middle Name"
              defaultValue=""
              {...register("mname", {
                minLength: 3,
                maxLength: 50,
              })}
            />

            <TextField
              id="lname"
              label="Last Name"
              defaultValue=""
              {...register("lname", {
                minLength: 3,
                maxLength: 50,
              })}
            />

            <br/>

            <TextField
              id="age"
              label="Age"
              defaultValue=""
              {...register("lname", {
                minLength: 3,
                maxLength: 50,
              })}
            />


            <br/>
            <br/>

            <Button variant="contained" color="success" type='upload'>
            Upload Health Document
            </Button>

          </div>
          <div className="container my-3">
            <div>Family Details</div>
            <hr></hr>
            <small> Family Members</small>
            <hr></hr>
          </div>

          <div className="container my-3">
            <div>Income Details</div>
            <hr></hr>
            <TextField
              required
              id="income"
              label="Income"
              defaultValue=""
              {...register("lname", {
                minLength: 3,
                maxLength: 50,
              })}
            />
            <hr></hr>
          </div>

          <div className="container my-3">
            <div>Coverage</div>
            <hr></hr>
            <TextField
              required
              id="coverage"
              label="Required Coverage"
              defaultValue=""
              {...register("lname", {
                minLength: 3,
                maxLength: 50,
              })}
            />
            <hr></hr>
          </div>

          


        </Box>
        <div className="container">
          <Button type="submit" variant="contained" color="success">
            {" "}
            submit
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Insurance;
