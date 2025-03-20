import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'; // For input fields
import Button from '@mui/material/Button'; // For the submit button


const Register = () => {
  const [userNameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const registerUser = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userNameInput,
          password: passwordInput,
          email: emailInput
        }),
      });
      console.log(userNameInput);
      console.log(emailInput);
      if (!response.ok) {
        throw new Error("Failed to register. Please try again.");
      }
      console.log(response);
      const userData = await response.json();
      
      console.log(userData);

      const token = userData;


      localStorage.setItem("token", token);

      alert("Registration successful!");
      navigate("/"); // Redirect to home page
    } catch (err) {
      setError(err.message);
    }
  };

  // CSS testing code
  const containerStyles = {

  }

  return (
    <div className="bodyDivRegister">
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
        <h2>Register</h2>
      </Box>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <form onSubmit={registerUser}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, maxWidth: 300, margin: 'auto' }}>
            <div>
              <TextField
              required
                label="Email"
                variant="standard"
                style={{ width: "400px" }}
                type="email"
                value={emailInput}
                onChange={(event) => setEmailInput(event.target.value)}
                fullWidth
                
              />
            </div>

            <TextField
              label="User Name"
              variant="standard"
              style={{ width: "400px" }}
              type="text"
              value={userNameInput}
              onChange={(event) => setUserNameInput(event.target.value)}
              fullWidth
              required
            />

            <TextField
              label="Password"
              variant="standard"
              style={{ width: "400px" }}
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
              Register
            </Button>
          </Box>
        </form>
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
        <p>
          Need to log in? Click{" "}
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
              onClick={() => navigate("/login")}
            >here</Button>
          {/* <button onClick={() => navigate("/login")}>here</button> */}
        </p>
      </Box>
    </div>
  );
};

export default Register;
