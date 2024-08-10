import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Providers } from "@/components/Providers";


const inter = Inter({ subsets: ["latin"] });
const fontThemeDefault = "font-sans dark:text-white text-black";
export const metadata: Metadata = {
  title: "Lucacel Development",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={[inter.className, fontThemeDefault].join(' ')}>
        <Providers>
          <NavBar />
          <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-black bg-white">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
