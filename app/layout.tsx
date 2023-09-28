import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import { cn } from "@/lib/utils";
import ViewPortProvider from "@/providers/breakpoints";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(font.className, "flex flex-col")}>
        <ViewPortProvider>
          <ModalProvider />
          <ToastProvider />
          <NavBar />
          {children}
          <Footer />
        </ViewPortProvider>
      </body>
    </html>
  );
}
