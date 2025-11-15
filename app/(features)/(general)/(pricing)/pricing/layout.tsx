import { decodedUser } from "@/app/(shared)/helpers/server";
export default async function RootLayout({
  client,
  freelancer,
}: Readonly<{
  client: React.ReactNode;
  freelancer: React.ReactNode;
}>) {
  const user = await decodedUser();
  return <> {user?.role === "client" ? <>{client}</> : <>{freelancer}</>} </>;
}
