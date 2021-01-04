import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = (props) => {
  const { isAuthenticated } = useAuth0();

  let urls;
  if (localStorage.getItem("urlsArray") != null) {
    let arr = JSON.parse(localStorage.getItem("urlsArray"));
    urls = arr.map(function (obj, index) {
      return <p key={index}>{obj}</p>;
    });
  }

  let requestConfirmed;
  if (localStorage.getItem("urlsArrayApproved") != null) {
    let arr2 = JSON.parse(localStorage.getItem("urlsArrayApproved"));
    requestConfirmed = arr2.map(function (obj, index) {
      return <p key={index}>{obj}</p>;
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div
          style={{ backgroundColor: "lightGrey", fontWeight: "bold" }}
          className="col s6"
        >
          Requests Submitted <br />
          {isAuthenticated ? urls : null}
        </div>
        <div
          style={{ backgroundColor: "white", fontWeight: "bold" }}
          className="col s6"
        >
          Requests Status
          <br />
          {isAuthenticated ? requestConfirmed : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
