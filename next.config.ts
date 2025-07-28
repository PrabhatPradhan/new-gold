import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['plus.unsplash.com'], // Add this line
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
 
 

export default nextConfig;
