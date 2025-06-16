"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
}
