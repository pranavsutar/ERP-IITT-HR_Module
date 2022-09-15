import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Dialog from "./Dialog";
import Educationdetails from "./Educationdetails";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const ELEncashment = () => {
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
          <b>Apply for EL Encashment</b>
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
            <br />
              <TextField
                required
                id="designation"
                label="Designation"
                defaultValue=""
                {...register("desgination", {
                  required: true,
                  pattern: {
                    minLength: 3,
                    maxLength: 50,
                  },
                })}
              />

            
          </div>
          <div className="container my-3">
            <div>EL Details</div>
            <hr></hr>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
            
              <TextField
                required
                id="leavesleft"
                label="Number of Leaves Left"
                defaultValue=""
                {...register("leavesleft", {
                  required: true,
                  pattern: "[0-9]*"
                })}
              />


            </Box>
          </div>
        </Box>
        <div className="container">
          <Button type="submit" variant="outlined">
            {" "}
            Apply
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default ELEncashment;
