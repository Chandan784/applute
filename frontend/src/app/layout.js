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
        <title>Applute Technologies</title>

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3581420939899627"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className="bg-white text-gray-900">
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
