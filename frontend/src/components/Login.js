// src/components/Login.js
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../userSlice";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
  width: 300px;
  margin: 100px auto;
  background: #222;
  padding: 20px;
  border: 2px solid #00ff00;
  color: #00ff00;
`;

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/login", { email, password });
            // Dispatch the user details to Redux store
            dispatch(setUserDetails(res.data));
            // Navigate to the main application route
            navigate("/app");
        } catch (err) {
            console.error(err);
            alert("Login failed: " + (err.response?.data?.message || "Unknown error"));
        }
    };

    return (
        <LoginContainer>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>
                <button type="submit" style={{ padding: "8px 12px", marginTop: "10px" }}>
                    Login
                </button>
            </form>
        </LoginContainer>
    );
}

export default Login;
