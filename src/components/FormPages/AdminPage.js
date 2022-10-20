import React from "react";
import Admin from "../Forms/Admin";
import PageHeader from "../PageHeader";
import PersonIcon from "@mui/icons-material/Person";
import Header from "../Header";
const AdminPage = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1583373834259-46cc92173cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80)",
        backgroundPosition: "center",
        minHeight: "100vh",
        minWidth:"100vw",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <div
        className="container"
        style={{
          minHeight: "100vh",
          minWidth: "100vw",

          backgroundImage:
            "linear-gradient(to right, rgb(0,0,0,1) , rgb(0,0,0,0))",

            display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", minheight:"100vh"
        }}
      >
        <div className="container" style={{}}>
          <div className="container">
            <PageHeader
              title="Page Title"
              subtitle="Page Description"
              icon={<PersonIcon />}
            />
          </div>
          <div className="container">
            <Admin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
