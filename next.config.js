/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // to permit all root to be accepted
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
