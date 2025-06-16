"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Menu from "./components/Menu";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="font-jamjuree">
      {pathname !== "/login" && (
        <div className="flex">
          <Menu children={children} />
        </div>
      )}
      {pathname === "/login" && <main>{children}</main>}
    </div>
  );
}
