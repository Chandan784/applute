"use client";

import "./globals.css"; // ✅ Import Tailwind and custom CSS here

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <title>Applute</title>
      </head>
      <body className="bg-white text-gray-900">
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
