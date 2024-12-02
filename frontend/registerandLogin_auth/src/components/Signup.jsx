import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://registerandlogin-auth-2.onrender.com/api/register", { username, password });
      alert("Registration successful. Please log in.");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed!");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Signup</button>
      <p>
        Already have an account?{" "}
        <span className="loginandregister" onClick={handleLoginRedirect}>
          Login here
        </span>
      </p>
    </form>
  );
};

export default Signup;
