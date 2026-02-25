/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
       {
      protocol: "https",
      hostname: "picsum.photos",
    },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
    domains: ["images.unsplash.com"],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

