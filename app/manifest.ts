import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next.js App",
    short_name: "Next.js App",
    description: "Next.js App",
    start_url: "/pages/home",
    display: "standalone",
    background_color: "#f8f8f8",
    theme_color: "#33C481",
    icons: [
      {
        src: "/icons/pwa-icons/icon-192x192.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
