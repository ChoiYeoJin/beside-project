/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "prod";
const withPWA = require("next-pwa")({
  dest: "public",
  disable: !isProd,
});

const nextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_SERVER_DOMAIN], // 여기에 이미지 호스팅 도메인을 추가
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/kiki",
        permanent: true,
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
