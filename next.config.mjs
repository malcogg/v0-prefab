/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "prefabricated.co" }],
        destination: "https://www.prefabricated.co/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
