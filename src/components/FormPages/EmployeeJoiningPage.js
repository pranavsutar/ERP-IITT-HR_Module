import React from "react";
import Employeejoining from "../Forms/Employeejoining";
import PageHeader from "../PageHeader";
import PersonIcon from "@mui/icons-material/Person";
import Header from "../Header";
const EmployeeJoiningPage = () => {
  return (
    <div>
      <Header/>
      <div className="container my-3">
        <PageHeader
          title="Page Title"
          subtitle="Page Description"
          icon={<PersonIcon />}
        />
      </div>
      <div className="container my-5">
        <Employeejoining/>
      </div>
    </div>
  );
};

export default EmployeeJoiningPage;
