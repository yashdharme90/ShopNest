import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Verification failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      setMessage("Email verified! Redirecting...");
      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError("");
    setMessage("");
    try {
      const res = await fetch("/api/auth/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to resend");
      setMessage("A new OTP has been sent to your email.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ background: "#000", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
      <div style={{ background: "#171717", border: "1px solid #262626", borderRadius: "12px", padding: "40px", maxWidth: "400px", width: "100%" }}>
        <h2 style={{ color: "#fff", marginBottom: "8px" }}>Verify your email</h2>
        <p style={{ color: "#a1a1aa", fontSize: "0.9rem", marginBottom: "24px" }}>
          Enter the 6-digit code sent to <span style={{ color: "#fb923c" }}>{email}</span>
        </p>

        <form onSubmit={handleVerify}>
          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter OTP"
            required
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #262626",
              background: "#09090b",
              color: "#fff",
              fontSize: "1.2rem",
              letterSpacing: "6px",
              textAlign: "center",
              marginBottom: "16px",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            disabled={loading || otp.length !== 6}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              background: loading ? "#7c3d0f" : "#f97316",
              color: "#000",
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>

        {message && <p style={{ color: "#4ade80", fontSize: "0.9rem", marginTop: "16px" }}>{message}</p>}
        {error && <p style={{ color: "#f87171", fontSize: "0.9rem", marginTop: "16px" }}>{error}</p>}

        <p style={{ marginTop: "20px", fontSize: "0.85rem", color: "#a1a1aa" }}>
          Didn't get a code?{" "}
          <button
            onClick={handleResend}
            type="button"
            style={{ background: "none", border: "none", color: "#fb923c", cursor: "pointer", padding: 0, fontWeight: 600 }}
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;
