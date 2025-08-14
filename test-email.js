const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config({ path: path.resolve(process.cwd(), ".env.local") });

async function testEmail() {
  console.log("Testing email configuration...");
  console.log("EMAIL_USER:", process.env.EMAIL_USER ? "Set" : "Not set");
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Set" : "Not set");

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("❌ Environment variables are missing!");
    console.log("Please create a .env.local file with:");
    console.log("EMAIL_USER=your-email@gmail.com");
    console.log("EMAIL_PASS=your-app-password");
    return;
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify connection
    console.log("Testing connection...");
    await transporter.verify();
    console.log("✅ Email configuration is valid!");

    // Send test email
    console.log("Sending test email...");
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Test Email from Portfolio",
      text: "This is a test email to verify your email configuration is working correctly.",
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Test email sent successfully!");
    console.log("Check your inbox for the test email.");
  } catch (error) {
    console.error("❌ Email test failed:", error.message);

    if (error.message.includes("Invalid login")) {
      console.log("💡 Solution: Check your email and app password");
    } else if (error.message.includes("Username and Password not accepted")) {
      console.log("💡 Solution: Verify your Gmail app password is correct");
    } else if (error.message.includes("Less secure app access")) {
      console.log(
        "💡 Solution: Use an app password instead of your regular password"
      );
    }
  }
}

testEmail();
