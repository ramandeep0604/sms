import nodemailer from "nodemailer";

console.log("FORCED CONFIG USED ✅");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "ramandeepkaur4619@gmail.com",
    pass: "gjmpdyaqsyftlodq",
  },
});

export default transporter;

