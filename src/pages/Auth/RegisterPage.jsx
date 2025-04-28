import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import countries from "../../data/countries"; // your list of countries
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    country: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add CSRF or Authorization headers if needed
        },
        body: JSON.stringify({
          firstname: form.firstName,
          lastname: form.lastName,
          mobile: form.mobile,
          country: form.country,
          username: form.username,
          email: form.email,
          password: form.password,
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        console.error("Registration failed:", err);
        alert("Registration failed. Please check your input.");
        return;
      }

      const data = await response.json();
      console.log("Registered:", data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-left px-4">
      <div className="bg-white shadow-xl  rounded-2xl w-full overflow-hidden flex w-full md:w-1/2 p-12">
        {/* Left Form Side */}
        <div className="w-full  p-5 py-3">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Create Account
          </h2>

          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <TextField
                label="First Name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                size="small"
                className="focus:ring-blue-500"
              />
              <TextField
                label="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                size="small"
                className="focus:ring-blue-500"
              />
              <TextField
                label="Mobile"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                size="small"
                className="focus:ring-blue-500"
              />
              <TextField
                label="Country"
                name="country"
                value={form.country}
                onChange={handleChange}
                select
                fullWidth
                variant="outlined"
                size="small"
              >
                {countries.map((c) => (
                  <MenuItem key={c.name} value={c.name}>
                    {c.name} ({c.code})
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <TextField
                label="Username"
                name="username"
                value={form.username}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                size="small"
                className="focus:ring-blue-500"
              />
              <TextField
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                fullWidth
                variant="outlined"
                size="small"
                className="focus:ring-blue-500"
              />
            </div>
            <TextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              size="small"
              className="focus:ring-blue-500"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type={showConfirm ? "text" : "password"}
              value={form.confirmPassword}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              size="small"
              className="focus:ring-blue-500"
              error={
                form.confirmPassword && form.confirmPassword !== form.password
              }
              helperText={
                form.confirmPassword &&
                form.confirmPassword !== form.password &&
                "Passwords do not match"
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowConfirm(!showConfirm)}>
                      {showConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="mt-6 flex flex-col items-center justify-center space-y-4">
            <Typography className="text-center">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </Typography>

            <Button
              onClick={handleRegister}
              variant="contained"
              size="large"
              className="w-1/2 bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg shadow-md"
            >
              Join
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
