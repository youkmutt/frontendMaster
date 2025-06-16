import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SAM_URL: process.env.NEXT_PUBLIC_SAM_URL,
    NEXT_PUBLIC_BASE_API_URL: process.env.NEXT_PUBLIC_BASE_API_URL,
    NEXT_PUBLIC_SECRET_KEY: process.env.NEXT_PUBLIC_SECRET_KEY,
    NEXT_PUBLIC_API_URL_IMG: process.env.NEXT_PUBLIC_API_URL_IMG,
    NEXT_PUBLIC_SSO_LOGIN_URL: process.env.NEXT_PUBLIC_SSO_LOGIN_URL,
    NEXT_PUBLIC_VERSION: process.env.NEXT_PUBLIC_VERSION,
  },
};

export default nextConfig;
