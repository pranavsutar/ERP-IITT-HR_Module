import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "animate.css";
// import ListAdmin2  from "./assets/ListAdmin2";
import Datatable from "./assets/ListAdmin";

const Admin2 = () => {
  const [education, seteducation] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitsignin = async (data) => {
    const response = await fetch("http://localhost:8000/api/Admin2", {
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
    <Datatable />   
    // <Paper
    //   className="animate__animated animate__fadeInUp"
    //   sx={{ padding: 2 }}
    //   style={{
    //     backgroundColor: "rgb(0,0,0,0.5)",
    //     color: "whitesmoke",
    //     borderRadius: "10px",
    //     maxWidth: "90vw",
    //     maxHeight: "90vh",
    //     overflow: "scroll",
    //   }}
    // >

    //   <form onSubmit={handleSubmit(onSubmit)}>
    //  < Datatable />
    //     <div className="container my-5" style={{display:"flex", justifyContent:"right", marginRight:"5px="}}>
    //       <Button type="submit" class="btn btn-success" id='Goto' >
    //         Edit
    //       </Button>
    //     </div>
    //   </form>
    // </Paper>
  );
};

export default Admin2;
