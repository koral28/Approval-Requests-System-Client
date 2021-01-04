import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ConfirmationEmail = (props) => {
  const { user } = useAuth0();

  useEffect(() => {
    if (localStorage.getItem("urlsArray") != null) {
      var existingEntries = JSON.parse(
        localStorage.getItem("urlsArrayApproved")
      );
      if (existingEntries == null) existingEntries = [];
      localStorage.setItem("urlsArrayApproved", JSON.stringify("confirmed"));
      existingEntries.push("confirmed");
      localStorage.setItem(
        "urlsArrayApproved",
        JSON.stringify(existingEntries)
      );
    }
  }, [user]);

  return (
    <div
      style={{ backgroundColor: "lightgreen", fontWeight: "bold" }}
      className="container"
    >
      Confirmed!
    </div>
  );
};

export default ConfirmationEmail;
