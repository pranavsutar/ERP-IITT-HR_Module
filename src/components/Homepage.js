import React from "react";
import Employeejoining from "./Forms/Employeejoining";
import Header from "./Header";
import PersonIcon from "@mui/icons-material/Person";
import PageHeader from "./PageHeader";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="container my-3">
        <PageHeader
          title="Page Title"
          subtitle="Page Description"
          icon={<PersonIcon />}
        />
      </div>
      <div className="container my-5">
        <Employeejoining></Employeejoining>
      </div>
    </div>
  );
};

export default Homepage;
