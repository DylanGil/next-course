import type { Metadata } from "next";

export default function RootLayout({
  children,
  params: { userId },
}: Readonly<{
  children: React.ReactNode;
  params: { userId: string };
}>) {
  console.log("userIddddd", userId);
  return children;
}

export async function generateMetadata({
  params: { userId },
}: {
  params: { userId: string };
}): Promise<Metadata> {
  return {
    title: userId + " | Create Next App",
    description: "Generated by create next app",
  };
}
