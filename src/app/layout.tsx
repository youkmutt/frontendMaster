import type { Metadata } from "next";
import "./globals.css";
import AuthGuard from "./components/AuthGuard";
import { AlertProvider } from "./context/AlertContext";
import ClientLayout from "./client_layout";
import PrimeReactProviders from "./context/PrimeReactProvider";
import "primeicons/primeicons.css";

export const metadata: Metadata = {
  title: "Frontend App",
  description: "Frontend App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthGuard>
          <AlertProvider>
            <ClientLayout>
              {/* <PrimeReactProviders>{children}</PrimeReactProviders> */}
              {children}
            </ClientLayout>
          </AlertProvider>
        </AuthGuard>
      </body>
    </html>
  );
}
