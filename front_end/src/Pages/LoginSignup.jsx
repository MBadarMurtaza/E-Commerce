import React, { useState } from "react";

function LoginSignup() {
  const [state, setstate] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signup = async () => {
    console.log("Signup called with:", formData);
    try {
      let response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data = await response.json();
      console.log("Signup response:", data);

      if (data.success) {
        // ✅ check data.success not response.success
        localStorage.setItem("auth-token", data.token);
        window.location.replace("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const login = async () => {
    console.log("Login called with:", formData);
    try {
      let response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data = await response.json();
      console.log("Login response:", data);

      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        window.location.replace("/");
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe4e4] to-[#fff5f5] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-8">
          {state}
        </h1>

        <div className="flex flex-col gap-5 sm:gap-6">
          {state === "Sign up" && (
            <input
              name="name"
              value={formData.name}
              onChange={changeHandler}
              className="h-12 sm:h-14 w-full px-4 sm:px-5 border border-gray-300 rounded-xl outline-none text-gray-700 text-base sm:text-lg focus:border-[#ff4141] focus:ring-2 focus:ring-[#ff4141] transition-all"
              type="text"
              placeholder="Your Name"
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            className="h-12 sm:h-14 w-full px-4 sm:px-5 border border-gray-300 rounded-xl outline-none text-gray-700 text-base sm:text-lg focus:border-[#ff4141] focus:ring-2 focus:ring-[#ff4141] transition-all"
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            className="h-12 sm:h-14 w-full px-4 sm:px-5 border border-gray-300 rounded-xl outline-none text-gray-700 text-base sm:text-lg focus:border-[#ff4141] focus:ring-2 focus:ring-[#ff4141] transition-all"
            type="password"
            placeholder="Password"
          />
        </div>

        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
          className="w-full mt-8 bg-[#ff4141] hover:bg-[#e03a3a] text-white text-base sm:text-lg font-medium py-3 rounded-xl shadow-md transition-all"
        >
          Continue
        </button>

        {state === "Sign up" ? (
          <p className="mt-6 text-center text-gray-600 text-sm sm:text-base">
            Already have an account?{" "}
            <span
              onClick={() => setstate("Login")}
              className="text-[#ff4141] font-semibold cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="mt-6 text-center text-gray-600 text-sm sm:text-base">
            Create an Account?{" "}
            <span
              onClick={() => setstate("Sign up")}
              className="text-[#ff4141] font-semibold cursor-pointer hover:underline"
            >
              Click here
            </span>
          </p>
        )}
        <div className="flex items-start gap-3 mt-6">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 sm:h-5 sm:w-5 accent-[#ff4141] rounded cursor-pointer"
          />
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            By continuing, I agree to the{" "}
            <span className="text-[#ff4141] font-medium cursor-pointer hover:underline">
              Terms of Use
            </span>{" "}
            &{" "}
            <span className="text-[#ff4141] font-medium cursor-pointer hover:underline">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
