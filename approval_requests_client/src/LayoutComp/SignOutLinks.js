import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignOutLinks = () => {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <ul className="right">
        <li>
          <button
            style={{
              border: "none",
              padding: "0",
              background: "none",
              color: "white",
            }}
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        </li>
      </ul>
    )
  );
};

export default SignOutLinks;
