import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Dialog from "./Dialog";
import Educationdetails from "./Educationdetails";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const Employeejoining = () => {
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
          <b>Employee Details</b>
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
                id="email"
                label="Email"
                defaultValue=""
                {...register("email", {
                  required: true,
                  pattern: {
                    minLength: 3,
                    maxLength: 50,
                  },
                })}
              />
            </Box>
          </div>
          <div className="container my-3">
            <div>Eduation Details</div>
            <hr></hr>
            <Dialog>
              <Educationdetails />
            </Dialog>
          </div>
        </Box>
        <div className="container">
          <Button type="submit" variant="outlined">
            {" "}
            submit
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Employeejoining;
