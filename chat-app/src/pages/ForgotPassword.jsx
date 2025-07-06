import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgot = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/auth/forgot-password", { email });
      toast.success("Reset link sent to your email!");
    } catch (err) {
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleForgot}
        className="border-2 bg-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg w-[90%] max-w-md"
      >
        <h2 className="text-2xl mb-2 font-semibold">Reset Your Password</h2>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-[#077eff] text-white rounded cursor-pointer"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
