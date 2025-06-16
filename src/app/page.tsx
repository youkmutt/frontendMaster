"use client";

// import { useEffect } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");

    if (token) {
      console.log("token");
      router.push("/dashboard");
    } else {
      console.log("Home No token");
      router.push("/login");
    }
  }, [router]);

  // return <div className="bg-login-gradient">{/* Dashboard content */}</div>;
}

export default Home;
