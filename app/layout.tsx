import { Header } from "./(features)/(protected)/(shared)/_components";
import { BodyContainer } from "./(shared)/_components";
import { Toaster } from "sonner";
import "./globals.css";
import { decodedUser } from "./(shared)/helpers/server";
import { NextIntlClientProvider } from "next-intl";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await decodedUser();
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider>
          <Header userType={user?.role!} />
          <BodyContainer>{children}</BodyContainer>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
