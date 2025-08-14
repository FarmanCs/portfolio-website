# Contact Form Setup Guide

## Current Issue

The contact form is not working because email credentials are not configured.

## Quick Fix

### Step 1: Create Environment File

Create a file named `.env.local` in your project root with the following content:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Step 2: Get Gmail App Password

1. Go to [Google Account settings](https://myaccount.google.com/)
2. Enable 2-Step Verification if not already enabled
3. Go to Security > App passwords
4. Select "Mail" as the app and "Other" as the device
5. Generate the app password
6. Copy the generated password

### Step 3: Update .env.local

Replace the placeholders in your `.env.local` file:

- Replace `your-email@gmail.com` with your actual Gmail address
- Replace `your-app-password` with the app password you generated

### Step 4: Restart Server

Stop your development server (Ctrl+C) and restart it:

```bash
npm run dev
```

## Alternative Solutions

### Option 1: Use a Different Email Service

You can modify the email configuration in `app/api/contact/route.ts` to use:

- Outlook/Hotmail
- Yahoo
- Custom SMTP server

### Option 2: Use a Form Service

Replace the current contact form with:

- Formspree
- Netlify Forms
- EmailJS

### Option 3: Manual Logging (Current Fallback)

The current setup will log contact form submissions to the console when email is not configured. You can check the terminal/console for new messages.

## Testing

After setup, test the contact form by:

1. Filling out the form on your website
2. Submitting it
3. Checking your email inbox
4. Checking the server console for any errors

## Security Notes

- Never commit `.env.local` to version control
- Use app passwords instead of regular passwords
- The `.env.local` file is already in `.gitignore`
