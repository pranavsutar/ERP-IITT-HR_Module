import React from "react";
import Dialog from "./Dialog";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function Educationdetails(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: {},
  } = useForm();
  const onSubmit = (data) => {
    props.seteducation(current=> [...current, data]);
    
  }
  const handleClick = () => {};
  return (
    <Paper sx={{ padding: 2 }} 
    style={{
      maxWidth:"90vw",
      maxHeight: "90vh",
      overflow:"scroll"
    }}
    >
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
              id="institute"
              label="Institute"
              defaultValue=""
              {...register("institute", {
                required: true,
                pattern: {
                  minLength: 3,
                  maxLength: 150,
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
                id="degree"
                label="Degree/Certification"
                defaultValue=""
                {...register("degree", {
                  required: true,
                  pattern: {
                    minLength: 3,
                    maxLength: 150,
                  },
                })}
              />
            </Box>


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
                id="result"
                label="Results/Achievements"
                defaultValue=""
                {...register("result", {
                  required: true,
                  pattern: {
                    minLength: 3,
                    maxLength: 550,
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
