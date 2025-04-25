import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
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
  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:1000/api/v1/login", values,
        {
          withCredentials: true, // Include credentials in the request
        }
      );
      localStorage.setItem("userLoggedIn","true");
    navigate("/dashboard");
    } 
    catch (err) {
      alert(err.response.data.error);
    }

  };

  return (
    <div className="flex h-screen  flex-col items-center justify-center">
      <div className="w-[60vw] md:w-[50vw] lg:w-[30vw]">
        <h1 className="text-3xl font-bold text-center mb-1 text-blue-800">Taskify

        </h1>
        <h3 className="text-center font-semibold text-xinc-900" >Login with Taskify

        </h3>
      </div>
      <div className="w-[60vw] md:w-[50vw] lg:w-[30vw] mt-5">
        <form className="flex flex-col gap-4" onSubmit={login}>

          <input type="email" required placeholder="Email" className="border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none" name="email" value={values.email}
            onChange={change} />
          <input type="password" required placeholder="Password" className="border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none" name="password"   value={values.password}
            onChange={change} />
          <button className="bg-blue-800 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-all duration-300">Login</button>
          <p className="text-center font-semibold text-gray-900" >Don't have an account? <Link to="/register">SignUp</Link> </p>


        </form>
      </div>
    </div>
  )
}

export default Login
