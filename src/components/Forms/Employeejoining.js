import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Dialog from "./Dialog";
import Educationdetails from "./Educationdetails";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { ErrorMessage } from "@hookform/error-message";
import "animate.css";
const Employeejoining = () => {
  const [education, seteducation] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitsignin = async (data) => {
    const response = await fetch("http://localhost:8000/api/employeejoining", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resp = await response.json();
    if (resp.success === "true") {
      alert(resp.msg);
    } else {
      alert(resp.msg);
    }
  };

  const onSubmit = (data) => {
    let fulldata = {
      ...data,
      education: education,
    };
    console.log(fulldata);
    submitsignin(fulldata);
  };

  const handleClick = () => {};

  useEffect(() => {
    console.log(education);
  }, [education]);

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
      <div className="container" style={{}}>
        <h2>
          <b>Employee Joining Details</b>
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
              InputLabelProps={{
                className: "textfield_label",
              }}
              InputProps={{
                className: "textfield_label",
              }}
              id="fname"
              label="First Name"
              defaultValue=""
              {...register("fname", {
                required: "First Name is required",
                pattern: {
                  minLength: 3,
                  maxLength: 50,
                },
              })}
            />

            <ErrorMessage
              errors={errors}
              name="fname"
              render={({ message }) => <p className="errormsg">{message}</p>}
            />

            <TextField
              InputLabelProps={{
                className: "textfield_label",
              }}
              InputProps={{
                className: "textfield_label",
              }}
              id="mname"
              label="Middle Name"
              defaultValue=""
              {...register("mname", {
                minLength: 3,
                maxLength: 50,
              })}
            />

            <TextField
              InputLabelProps={{
                className: "textfield_label",
              }}
              InputProps={{
                className: "textfield_label",
              }}
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
                InputLabelProps={{
                  className: "textfield_label",
                }}
                InputProps={{
                  className: "textfield_label",
                }}
                required
                id="email"
                label="Email"
                defaultValue=""
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />

              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <p className="errormsg">{message}</p>}
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
                InputLabelProps={{
                  className: "textfield_label",
                }}
                InputProps={{
                  className: "textfield_label",
                }}
                required
                id="phone"
                label="Phone Number"
                defaultValue=""
                {...register("phone", {
                  required: "Phone Number is required",
                  pattern: {
                    minLength: 5,
                    maxLength: 30,
                    message: "invalid phone number address",
                  },
                })}
              />

              <ErrorMessage
                errors={errors}
                name="phone"
                render={({ message }) => <p className="errormsg">{message}</p>}
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
                InputLabelProps={{
                  className: "textfield_label",
                }}
                InputProps={{
                  className: "textfield_label",
                }}
                required
                id="addressline1"
                label="Address Line 1"
                defaultValue=""
                {...register("addressline1", {
                  required: "AddressLine Required",
                  pattern: {
                    minLength: 3,
                    maxLength: 100,
                  },
                })}
              />
            </Box>

            <ErrorMessage
              errors={errors}
              name="addressline1"
              render={({ message }) => <p className="errormsg">{message}</p>}
            />
          </div>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              InputLabelProps={{
                className: "textfield_label",
              }}
              InputProps={{
                className: "textfield_label",
              }}
              id="addressline2"
              label="Address Line 2"
              defaultValue=""
              {...register("addressline2", {
                required: true,
                pattern: {
                  minLength: 3,
                  maxLength: 100,
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
              InputLabelProps={{
                className: "textfield_label",
              }}
              InputProps={{
                className: "textfield_label",
              }}
              required
              id="city"
              label="City"
              defaultValue=""
              {...register("city", {
                required: "city required",
                pattern: {
                  minLength: 3,
                  maxLength: 50,
                },
              })}
            />

            <ErrorMessage
              errors={errors}
              name="city"
              render={({ message }) => <p className="errormsg">{message}</p>}
            />

            <TextField
              InputLabelProps={{
                className: "textfield_label",
              }}
              InputProps={{
                className: "textfield_label",
              }}
              id="district"
              label="District"
              defaultValue=""
              {...register("district", {
                required: true,
                pattern: {
                  minLength: 3,
                  maxLength: 50,
                },
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
              id="state"
              label="State"
              defaultValue=""
              {...register("state", {
                required: "State/County required",
                pattern: {
                  minLength: 3,
                  maxLength: 50,
                },
              })}
            />

            <ErrorMessage
              errors={errors}
              name="state"
              render={({ message }) => <p className="errormsg">{message}</p>}
            />

            <TextField
              InputLabelProps={{
                className: "textfield_label",
              }}
              InputProps={{
                className: "textfield_label",
              }}
              required
              id="country"
              label="Country"
              defaultValue=""
              {...register("country", {
                required: "country required!",
                pattern: {
                  minLength: 3,
                  maxLength: 50,
                },
              })}
            />

            <ErrorMessage
              errors={errors}
              name="country"
              render={({ message }) => <p className="errormsg">{message}</p>}
            />

            <TextField
              InputLabelProps={{
                className: "textfield_label",
              }}
              InputProps={{
                className: "textfield_label",
              }}
              required
              id="pincode"
              label="Postal Code"
              defaultValue=""
              {...register("pincode", {
                required: "Pincode required",
                pattern: {
                  minLength: 3,
                  maxLength: 10,
                },
              })}
            />

            <ErrorMessage
              errors={errors}
              name="pincode"
              render={({ message }) => <p className="errormsg">{message}</p>}
            />
          </Box>
          <div className="container my-3">
            <div>Education Details</div>
            <hr></hr>
            <Dialog>
              <Educationdetails
                education={education}
                seteducation={seteducation}
              />
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
