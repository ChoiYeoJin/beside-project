/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "prod";
const withPWA = require("next-pwa")({
  dest: "public",
  disable: !isProd,
});

const nextConfig = {};

module.exports = withPWA(nextConfig);
