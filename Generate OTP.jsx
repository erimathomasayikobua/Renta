import express from "express";
import mysql from "mysql2";
import nodemailer from "nodemailer";
import crypto from "crypto";

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "Renta"
});
app.post("/send-otp", (req, res) => {
  const { email } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit

  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 mins

  db.query("INSERT INTO otp_codes (user_id, otp_code, expires_at) VALUES (?, ?, ?)", 
    [1, otp, expiresAt], (err) => {
    if (err) return res.status(500).json({ error: "DB error" });

    // Send OTP via Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: "your_email@gmail.com", pass: "app_password" }
    });

    transporter.sendMail({
      from: "your_email@gmail.com",
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}. It expires in 5 minutes.`
    });

    res.json({ message: "OTP sent!" });
  });
});
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");

  db.query(
    `SELECT * FROM otp_codes oc
     JOIN users u ON oc.user_id = u.user_id
     WHERE u.email = ? AND oc.otp_code = ? AND oc.is_used = FALSE
     ORDER BY oc.created_at DESC LIMIT 1`,
    [email, hashedOtp],
    (err, result) => {
      if (err) return res.status(500).json({ error: "DB error" });
      if (result.length === 0) return res.status(400).json({ error: "Invalid OTP" });

      const otpRecord = result[0];
      if (new Date() > otpRecord.expires_at) {
        return res.status(400).json({ error: "OTP expired" });
      }

      db.query("UPDATE otp_codes SET is_used = TRUE WHERE id = ?", [otpRecord.id]);
      res.json({ message: "OTP verified!" });
    }
  );
});
