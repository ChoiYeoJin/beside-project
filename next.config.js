/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "prod";
const withPWA = require("next-pwa")({
  dest: "public",
  disable: !isProd,
});

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
