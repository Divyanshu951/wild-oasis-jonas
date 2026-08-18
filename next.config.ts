// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,

  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cf.bstatic.com",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
