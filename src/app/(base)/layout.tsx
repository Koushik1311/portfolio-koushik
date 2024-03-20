import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koushik Roy",
  description: "Dynamic Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
