import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // const register = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("http://localhost:1000/api/v1/register", values);
  //     alert(res.data.success);
  //     navigate("/login");
  //   } catch (err) {
  //     alert(err.response.data.error);
  //   }
  // };
  const register = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:1000/api/v1/register", values);
      
      // Check if response and data exist before navigating
      if (res && res.data && res.data.success) {
        alert("Registration Successful!");
        navigate("/login");
      } else {
        alert("Unexpected response from the server.");
      }
    } catch (err) {
      console.error("Error:", err);
  
      // Check if error response exists
      if (err.response && err.response.data) {
        alert(err.response.data.error || "Something went wrong!");
      } else {
        alert("Failed to connect to the server. Check your backend.");
      }
    }
  };
  

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="w-[60vw] md:w-[50vw] lg:w-[30vw]">
        <h1 className="text-3xl font-bold text-center mb-1 text-blue-800">Taskify</h1>
        <h3 className="text-center font-semibold text-zinc-900">Register with Taskify</h3>
      </div>
      <div className="w-[60vw] md:w-[50vw] lg:w-[30vw] mt-5">
        <form className="flex flex-col gap-4" onSubmit={register}>
          <input
            type="text"
            required
            placeholder="Username"
            className="border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none"
            name="username"
            value={values.username}
            onChange={change}
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none"
            name="email"
            value={values.email}
            onChange={change}
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none"
            name="password"
            value={values.password}
            onChange={change}
          />
          <button type="submit"
            className="bg-blue-800 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-all duration-300"
            
          >
            Register
          </button>
          <p className="text-center font-semibold text-gray-900">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
