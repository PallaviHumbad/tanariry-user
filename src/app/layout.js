// src/app/layout.js
import "./globals.css";
import ClientLayout from "./ClientLayout";
import AppLayout from "./AppLayout";

export const metadata = {
  title: "Tana Riri - E-Commerce Store",
  description: "Your premium e-commerce destination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{ fontFamily: "'Playfair Display', serif" }}
        className="bg-bg min-h-screen"
      >
        <ClientLayout>
          <AppLayout>{children}</AppLayout>
        </ClientLayout>
      </body>
    </html>
  );
}
