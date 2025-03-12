import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [userNameInput, setUserNameInput] = useState("");
  const [roleInput, setRoleInput] = useState(""); // Only for testing purposes
  const [avatarInput, setAvatarInput] = useState(""); // Only for testing purposes
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const registerUser = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

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
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={registerUser}>
        <input
          type="email"
          placeholder="Email"
          value={emailInput}
          onChange={(event) => setEmailInput(event.target.value)}
          required
        />

        <input
          type="text"
          placeholder="User Name"
          value={userNameInput}
          onChange={(event) => setUserNameInput(event.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={passwordInput}
          onChange={(event) => setPasswordInput(event.target.value)}
          required
        />

        <input // Testing purposes
          type="text"
          placeholder="Role (Optional)"
          value={roleInput}
          onChange={(event) => setRoleInput(event.target.value)}
        />

        <input // Testing purposes
          type="text"
          placeholder="Avatar URL (Optional)"
          value={avatarInput}
          onChange={(event) => setAvatarInput(event.target.value)}
        />

        <button type="submit">Register</button>
      </form>

      <p>
        Need to log in? Click{" "}
        <button onClick={() => setIsLoggingIn(true)}>here</button>
      </p>
    </div>
  );
};

export default Register;
