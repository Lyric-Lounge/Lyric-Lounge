import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; // Material UI Button





const Login = () => {
  const [userNameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const loginUser = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userNameInput,
          password: passwordInput,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to log in. Please check your credentials");
      }

      const data = await response.json();
      localStorage.setItem("token", data.access_token);

      alert("Login successful!");
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
        <h2>Login</h2>
      </Box>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={loginUser}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300, margin: 'auto' }}>
          <TextField
            label="Username"
            variant="standard"
            type="text"
            value={userNameInput}
            onChange={(event) => setUserNameInput(event.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Password"
            variant="standard"
            type="password"
            value={passwordInput}
            onChange={(event) => setPasswordInput(event.target.value)}
            fullWidth
            required
          />
         <Button
             variant="contained"
             type="submit"
             fullWidth
             sx={{
               marginTop: 2,
               backgroundColor: '#0094c6', 
               color: '#000000',
               '&:hover': {
                 backgroundColor: '#349dfe', 
               },
             }}
          >
            Login
          </Button>
        </Box>
      </form>

      <Box sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
      <p>
        Need to register? Click{" "}
        <Button
              variant="contained"
              type="submit"
              size="xsm"
              sx={{
                marginTop: 0,
                backgroundColor: '#0094c6',
                color: '#000000',
                '&:hover': {
                  backgroundColor: '#349dfe',
                },
              }}
              onClick={() => navigate("/register")}
            >here</Button>
        {/* <button onClick={() => navigate("/register")}>
          here
        </button> */}
      </p>
      </Box>
    </>
  );
};

export default Login;
