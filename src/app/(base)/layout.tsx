import type { Metadata } from "next";
import NavBar from "@/components/Layout/NavBar";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: "Mahesh's Portfolio",
  description: "Frontend Developer",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <NavBar />
        {children}
        <Footer />
      </>
    );
  }