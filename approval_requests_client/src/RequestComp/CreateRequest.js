import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const CreateRequest = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [projectState, setProjectState] = useState({
    url: "",
    email: "",
  });
  const [emailsArray, setEmailsArray] = useState([]);
  const [urlsArray, setUrlsArray] = useState([]);
  const { isAuthenticated } = useAuth0();

  const notConfirmedLogic = () => {
    let existingEntries = JSON.parse(localStorage.getItem("urlsArray"));
    let existingEntries2 = JSON.parse(
      localStorage.getItem("urlsArrayApproved")
    );
    if (existingEntries != null && existingEntries2 == null) {
      existingEntries2 = [];
      localStorage.setItem(
        "urlsArrayApproved",
        JSON.stringify("not confirmed")
      );
      existingEntries2.push("not confirmed");
      localStorage.setItem(
        "urlsArrayApproved",
        JSON.stringify(existingEntries2)
      );
    } else if (existingEntries != null && existingEntries2 != null) {
      if (existingEntries.length > existingEntries2.length) {
        localStorage.setItem(
          "urlsArrayApproved",
          JSON.stringify("not confirmed")
        );
        existingEntries2.push("not confirmed");
        localStorage.setItem(
          "urlsArrayApproved",
          JSON.stringify(existingEntries2)
        );
      }
    }
  };

  const urlChange = (e) => {
    setProjectState({
      ...projectState,
      url: e.target.value,
    });
  };
  const emailChange = (e) => {
    setProjectState({
      ...projectState,
      email: e.target.value,
    });
  };

  const addEmail = (data) => {
    notConfirmedLogic();
    if (!emailsArray.includes(projectState.email)) {
      setEmailsArray([...emailsArray, projectState.email]);
      setUrlsArray(projectState.url);
    }
  };

  const onSubmit = (data) => {
    var existingEntries = JSON.parse(localStorage.getItem("urlsArray"));
    if (existingEntries == null) {
      existingEntries = [];
    }
    localStorage.setItem("urlsArray", JSON.stringify(urlsArray));
    existingEntries.push(urlsArray);
    localStorage.setItem("urlsArray", JSON.stringify(existingEntries));

    axios
      .post("https://approvals-system.herokuapp.com/api/email", {
        emailsArray,
        projectState,
      })
      .then((resp) => {
        if (resp.data.success) {
          console.log("Request Sent!");
          props.history.push({
            pathname: "/",
          });
        } else {
          console.log("Request Failed");
        }
      });
  };

  return (
    isAuthenticated && (
      <div className="container">
        <form
          style={{ opacity: 0.9 }}
          className="white"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h5
            style={{ fontWeight: "bold" }}
            className="grey-text text-darken-3"
          >
            Create New Request
          </h5>
          <div className="input-field">
            <label style={{ fontWeight: "bold" }} htmlFor="url">
              Open Source URL Link
            </label>
            <input
              name="url"
              type="text"
              id="url"
              onChange={urlChange}
              ref={register({ required: true })}
            />
            {errors.url && "URL is required."}
          </div>
          <div className="input-field">
            <label style={{ fontWeight: "bold" }} htmlFor="email">
              Enter The Emails For Approve The Request
            </label>
            <input
              name="email"
              type="text"
              id="email"
              onChange={emailChange}
              ref={register({ required: true })}
            />
            {errors.email && "URL is required."}
          </div>
          <div className="input-field">
            <button
              className="btn waves-effect waves-light btn-small lightBlue lighten-1 z-depth-0"
              style={{ fontWeight: "bold" }}
              type="button"
              onClick={addEmail}
            >
              Add Email
            </button>
            <br />

            <ul>
              {emailsArray.map((email, index) => {
                return <li key={index}>{email}</li>;
              })}
            </ul>
          </div>
          <div className="input-field">
            <button
              className="btn waves-effect waves-light btn-small lightBlue lighten-1 z-depth-0"
              type="submit"
              name="send"
              style={{ fontWeight: "bold" }}
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default CreateRequest;
