import type { Metadata } from "next";
import "./globals.css";
// import PerformanceMonitor from "@/components/PerformanceMonitor";

export const metadata: Metadata = {
  title: "FU | Farman Ullah - MERN Stack Developer",
  description:
    "MERN Stack Developer specializing in MongoDB, Express.js, React.js, and Node.js. Based in Lahore, Pakistan with expertise in building scalable web applications.",
  metadataBase: new URL("https://farmanullah.dev"),
  keywords: [
    "MERN Stack Developer",
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "Next.js",
    "JavaScript",
    "Lahore",
    "Pakistan",
  ],
  authors: [{ name: "Farman Ullah" }],
  creator: "Farman Ullah",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/favicon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farmanullah.dev",
    title: "FU | Farman Ullah - MERN Stack Developer",
    description:
      "MERN Stack Developer specializing in MongoDB, Express.js, React.js, and Node.js.",
    siteName: "Farman Ullah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "FU | Farman Ullah - MERN Stack Developer",
    description:
      "MERN Stack Developer specializing in MongoDB, Express.js, React.js, and Node.js.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-200 overflow-x-hidden">
        {/* <PerformanceMonitor /> */}
        {children}
      </body>
    </html>
  );
}
