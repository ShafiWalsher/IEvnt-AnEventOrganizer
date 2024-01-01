import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import toast, { Toaster } from "react-hot-toast";

// For User Authentication
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "i-Evnt",
  description: "iEvnt is a platform fot event organization and management.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              className: "",
              duration: 3000,
              style: {
                background: "#F6F8FD",
                color: "rgba(0,0,0,0.85)",
              },
            }}
          />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
