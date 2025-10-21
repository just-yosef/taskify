"use client";
import "@/lib/i18n";
import { Header } from "./(features)/(protected)/(shared)/_components";
import { BodyContainer } from "./(shared)/_components";
import "./globals.css";
import { Toaster } from "sonner";
import { useDirection } from "./(shared)/hooks/useDirection";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { dir } = useDirection();
  return (
    <html lang="en">
      <body dir={dir}>
        <Header userType="client" />
        <BodyContainer>{children}</BodyContainer>
        <Toaster />
      </body>
    </html>
  );
}
