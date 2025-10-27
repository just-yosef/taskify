import { Header } from "./(features)/(protected)/(shared)/_components";
import { BodyContainer } from "./(shared)/_components";
import { Toaster } from "sonner";
import "./globals.css";
import { decodedUser } from "./(shared)/helpers/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await decodedUser()
  return (
    <html lang="en">
      <body >
        <Header userType={user?.role!} />
        <BodyContainer>{children}</BodyContainer>
        <Toaster />
      </body>
    </html>
  );
}
