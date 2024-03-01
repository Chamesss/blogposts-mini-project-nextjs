import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./Providers";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chams's Blog",
  description: "Created by Chams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className={nunito.className}>
            <Navbar />
            <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prove-invert mx-auto">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
