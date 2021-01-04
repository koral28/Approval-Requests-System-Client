import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const SignInLinks = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <ul className="right">
        <li>
          <NavLink to="/create">New Request</NavLink>
        </li>
        <li>
          <button
            style={{
              border: "none",
              padding: "0",
              background: "none",
              color: "white",
            }}
            onClick={() => logout()}
          >
            Log Out
          </button>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating lightBlue lighten-1">
            {user.given_name}
          </NavLink>
        </li>
      </ul>
    )
  );
};

export default SignInLinks;
