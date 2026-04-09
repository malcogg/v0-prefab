import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EarthNest Florida",
    short_name: "EarthNest",
    description: "Central Florida ADU Specialists",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0F6E56",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
