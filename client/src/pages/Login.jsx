import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!email || !password){
      alert("All fields are required");
      return
    }
    try{
      await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`,{email,password});
      navigate("/dashboard");
    }catch(error){
      console.error(error)
      alert("Login failed !");
    }

  }



  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">

      {/* LEFT SECTION – FORM (Light) */}
      <div className="left md:w-1/2 w-full flex items-center justify-center bg-gray-100">
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[55%] bg-white p-8 rounded-2xl shadow-xl">
          
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mt-1">
            Login to continue
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email" name="email"
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password" name="password"
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center text-sm text-gray-500">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-black" />
                Remember me
              </label>
              <span className="hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
            >
              Login
            </button>

            {/* Register Link */}
            <p className="text-center text-sm text-gray-500">
              Don’t have an account?{" "}
              <span onClick={()=>navigate('/signup')} className="text-black font-semibold cursor-pointer hover:underline">
               Sign up
              </span>
            </p>

          </form>
        </div>
      </div>

      {/* RIGHT SECTION – INTRO (Dark) */}
      <div className="right md:w-1/2 w-full bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Welcome Back!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-md">
          Login and stay connected with everything you love.
        </p>

        <div className="mt-10 flex gap-4">
          <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-white/70 animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-white/40 animate-pulse"></div>
        </div>
      </div>

    </div>
  );
};

export default Login;
