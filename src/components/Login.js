import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="dark"
      style={{ marginRight: "10px" }}
      onClick={() => loginWithRedirect()}
    >
      Login
    </Button>
  );
};
