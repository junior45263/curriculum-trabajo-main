import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      variant="dark"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </Button>
  );
};
