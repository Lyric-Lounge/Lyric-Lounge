import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'; // For input fields
import Button from '@mui/material/Button'; // For the submit button

const Register = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [userNameInput, setUserNameInput] = useState("");
  const [roleInput, setRoleInput] = useState(""); // Only for testing purposes
  const [avatarInput, setAvatarInput] = useState(""); // Only for testing purposes
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const registerUser = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInput,
          name: userNameInput,
          password: passwordInput,
          role: roleInput || "customer", // Default role if not provided
          avatar: avatarInput || "https://i.pravatar.cc/150?img=1", // Default avatar
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to register. Please try again.");
      }

      const userData = await response.json();

      // Simulating JWT authentication | testing purposes
      const fakeToken = `fake-jwt-token-${userData.id}`; // Replace with actual JWT from backend | testing purposes

      // Store JWT token in localStorage
      localStorage.setItem("token", fakeToken);

      alert("Registration successful!");
      navigate("/home"); // Redirect to home page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Box sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
      <h2>Register</h2>
      </Box>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={registerUser}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, maxWidth: 300, margin: 'auto' }}>
          <TextField
            label="Email"
            variant="standard"
            type="email"
            value={emailInput}
            onChange={(event) => setEmailInput(event.target.value)}
            fullWidth
            required
          />
          
          <TextField
            label="User Name"
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

          <TextField
            label="Role (Optional)"
            variant="standard"
            type="text"
            value={roleInput}
            onChange={(event) => setRoleInput(event.target.value)}
            fullWidth
          />

          <TextField
            label="Avatar URL (Optional)"
            variant="standard"
            type="text"
            value={avatarInput}
            onChange={(event) => setAvatarInput(event.target.value)}
            fullWidth
          />

          <Button
             variant="contained"
             type="submit"
             fullWidth
             sx={{
               marginTop: 2,
               backgroundColor: '#303f9f', 
               '&:hover': {
                 backgroundColor: '#455a64', 
               },
             }}
          >
            Register
          </Button>
        </Box>
      </form>

      <Box sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
      <p>
        Need to log in? Click{" "}
        <button onClick={() => navigate("/login")}>here</button>
      </p>
      </Box>
    </div>
  );
};

export default Register;
