import { Header } from "./(features)/(protected)/(shared)/_components";
import { BodyContainer } from "./(shared)/_components";
import { Toaster } from "sonner";
import { getCookie } from "./(api)/(helpers)";
import { IUser } from "./(features)/(general)/types";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCookie<IUser>("user");
  return (
    <html lang="en">
      <body>
        <Header userType={user?.role!} />
        <BodyContainer>{children}</BodyContainer>
        <Toaster />
      </body>
    </html>
  );
}
