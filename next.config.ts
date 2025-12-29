import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uxwing.com",
      },
      {
        protocol: "https",
        hostname: "assets.stickpng.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "unavatar.io",
      },
    ],
  },
};

export default nextConfig;
