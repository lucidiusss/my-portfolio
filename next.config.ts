import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "yourdomain.com", "externaldomain.com"],
    loader: "custom",
  },
};

export default nextConfig;
