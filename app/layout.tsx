import type { Metadata } from "next";
import "./globalStyles/normalize.css";
import "./globalStyles/globals.css";
import "./globalStyles/menu.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "@/components/layouts/Layout";

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
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
