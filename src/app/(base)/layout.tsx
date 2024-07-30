import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahesh Bahir",
  description: "Frontend Developer",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <>{children}</>;
  }