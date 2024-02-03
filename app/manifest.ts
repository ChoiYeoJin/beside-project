import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "키키",
    short_name: "키키",
    description: "모아 보는 단축키",
    start_url: "/pages/home",
    display: "standalone",
    background_color: "#33C481",
    theme_color: "#33C481",
    icons: [
      {
        src: "/icons/pwa-icons/logo_192x192.svg",
        sizes: "any",
        type: "image/svg",
      },
    ],
  };
}
