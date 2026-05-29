import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "s3ng.cashify.in" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.cnippet.dev" },
      { protocol: "https", hostname: "images.cnippet.dev" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
