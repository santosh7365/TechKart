import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login({ email, password });
      // Store token (in localStorage for simplicity)
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        alert("Login Successful!");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-nav">
        <h1 className="logo">TechKart</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <button className="btn btn-primary" onClick={() => navigate('/register')}>Sign Up</button>
        </div>
      </div>

      <div className="auth-content">
        <div className="auth-card">
          <h2>Welcome Back</h2>
          <p className="subtitle">Sign in to your TechKart account</p>

          {error && <p className="error-msg">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary full-width">
              Sign In
            </button>
          </form>

          <p className="switch-auth">
            Don't have an account? <Link to="/register">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
