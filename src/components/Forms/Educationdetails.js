import React from "react";
import Dialog from "./Dialog";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function Educationdetails() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {},
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const handleClick = () => {};
  return (
    <Paper sx={{ padding: 2 }}>
      <div className="container">
        <h3>Add Details</h3>
        <hr></hr>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="container">
            <div>Eductation Details</div>
            <hr></hr>
            <TextField
              required
              id="fname"
              label="Detail1"
              defaultValue=""
              {...register("fname", {
                required: true,
                pattern: {
                  minLength: 3,
                  maxLength: 50,
                },
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
                label="Detail2"
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
        </Box>
        <div className="container my-3">
          <Button type="submit" variant="outlined">
            {" "}
            submit
          </Button>
        </div>
      </form>
    </Paper>
  );
}
