import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");

    navigate("/login", {replace: true});
  }, [navigate]);

  return (
    <>
      <h1>Logging out...</h1>
      <p>You are being redirected to the login page.</p>
    </>
  );
};

export default Logout