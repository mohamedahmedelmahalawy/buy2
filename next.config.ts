import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //add placeholder.co to the list of allowed image domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
