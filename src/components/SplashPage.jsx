import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const userToken = localStorage.getItem("token");

      if (userToken) {
        navigate("/home", { replace: true }); // Redirect to home if token exists
      } else {
        navigate("/login", { replace: true }); // Redirect to login if no token
      }
    }, 1500); // 1.5 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <>
      <h1>Loading...</h1>
      <p>Checking authentication status...</p>
    </>
  );
};

export default SplashScreen;
