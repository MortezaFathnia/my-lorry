import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CssBaseline from '@mui/material/CssBaseline';
import "./globals.css";

import { AuthProvider } from "../context/auth";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${interSans.variable} `}>
            <CssBaseline />
            {children}
        </body>
      </AuthProvider>
    </html>
  );
}
