/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: { dirs: ["."] },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media-assets.grailed.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "archived-user-images.s3.us-east-2.amazonaws.com",
        pathname: "**",
      },
    ],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
