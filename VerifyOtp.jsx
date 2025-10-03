import React, { useState } from "react";

function OtpVerify() {
  const [email, setEmail] = useState("user@example.com");
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  
  // 📤 Send OTP
  const sendOtp = async () => {
    try {
      const res = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await res.json();

      if(!res.ok) {
        throw new Error(data.error || "Request Failed!!!");
      }

      setStatus(data.message || data.error);
    } catch (err) {
      setStatus("Error sending OTP");
    } finally {
        setLoading(false);
    }
  };

  // 🔐 Verify OTP
  const verifyOtp = async () => {
    try {
      const res = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Request Failed!");
      }

     setStatus(data.message);
    } catch (err) {
        setStatus(err.message || "Error Verifying OTP");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="otp-container">
      <h2>OTP Verification</h2>
        <button disabled ={loading} onClick={verifyOtp}>
        {loading ? "Sending..." : "Send OTP"}
      </button>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendOtp}>Send OTP</button>

      <input
        type="number"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button  onClick={verifyOtp}>Verify OTP</button>
      {status && <p>{status}</p>}
    </div>
  );
}

export default OtpVerify;