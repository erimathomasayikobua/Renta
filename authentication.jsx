import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || "Guest";
  const email = localStorage.getItem('email') || "user@example.com";

  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState("");

const verifyOtp = async () => {
  try {
    const res = await fetch("https://localhost:5000/verify-otp", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify*({ email, otp}),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("✅ OTP Verified!");
      localStorage.setItem("auth", true);
      navigate("/dashboard");
    } else {
      setStatus("❌ " + (data.error || "Invalid OTP"));
    }
  }catch (err) {
    setStatus("⚠️ Server error, try again later");
  }
};
  return (
    <div className="Authentication-page">
      <h3>Enter OTP</h3>
      <FaUserCircle size="100" color="#888" />
      <div className="Auth-box">
        <p>
          Hi, <strong>{username}</strong>
        </p>

        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))} // remove all non-digits
          maxLength={6}
          required
        />

        {/*Verify Button*/}
        <button onClick={verifyOtp}>Verify OTP</button>

        {/* Status Message */}
        {status && <p>{status}</p>}
      </div>
    </div>
  );
}

export default Auth