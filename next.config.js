/** @type {import('next').NextConfig} */
const nextConfig = {
  // add exclusion for UploadThing
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
