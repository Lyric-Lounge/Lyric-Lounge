import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const loginUser = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to log in. Please check your credentials")
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
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}></p>}

      <form onSubmit={loginUser}>
        <input
          type="email"
          placeholder="Email"
          value={emailInput}
          onChange={(event) => setEmailInput(event.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={passwordInput}
          onChange={(event) => setPasswordInput(event.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Need to register? Click {" "}
        <button onClick={() => navigate("/register")}>
          here
        </button>
      </p>
    </>
  );
};

export default Login