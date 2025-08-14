# Email Setup Guide

## Setting up Nodemailer for Contact Form

To make the contact form work properly, you need to configure your email credentials.

### 1. Create Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 2. Gmail App Password Setup

For Gmail, you need to use an App Password instead of your regular password:

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Enable 2-Step Verification if not already enabled
3. Go to Security > App passwords
4. Select "Mail" as the app and "Other" as the device
5. Generate the app password
6. Use that generated password in your `EMAIL_PASS` environment variable

### 3. Alternative Email Services

If you prefer to use other email services, you can modify the transporter configuration in `app/api/contact/route.ts`:

#### For Outlook/Hotmail:

```javascript
const transporter = nodemailer.createTransporter({
  service: "outlook",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

#### For Yahoo:

```javascript
const transporter = nodemailer.createTransporter({
  service: "yahoo",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

#### For Custom SMTP:

```javascript
const transporter = nodemailer.createTransporter({
  host: "your-smtp-host.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### 4. Testing

After setting up your environment variables:

1. Restart your development server
2. Fill out the contact form on your website
3. Submit the form
4. Check your email inbox for the message

### 5. Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- Use app passwords instead of regular passwords for better security
- Consider using environment variables in production deployments

### 6. Troubleshooting

If emails are not sending:

1. Check that your environment variables are correctly set
2. Verify that your Gmail app password is correct
3. Make sure 2-Step Verification is enabled on your Google account
4. Check the browser console and server logs for error messages
5. Ensure your email service allows SMTP access
